/**
 * Spin The Wheels Online - Core Wheel Engine
 * High-performance, Retina-ready, Cryptographically Fair, Web Audio Synthesized
 */

(function () {
  "use strict";

  // --- Palettes & Themes ---
  const THEMES = {
    rainbow: ["#EF4444", "#F97316", "#EAB308", "#22C55E", "#06B6D4", "#3B82F6", "#8B5CF6", "#EC4899", "#14B8A6", "#F43F5E"],
    casino: ["#F59E0B", "#D97706", "#B45309", "#78350F", "#FBBF24", "#FDE68A", "#92400E", "#D97706"],
    neon: ["#FF007F", "#7928CA", "#0070F3", "#00DFD8", "#79FFE1", "#FF4F81", "#8A2BE2", "#00F5D4"],
    pastel: ["#FBCFE8", "#C7D2FE", "#BAE6FD", "#BBF7D0", "#FEF08A", "#FED7AA", "#DDD6FE", "#E9D5FF"],
    sunset: ["#FF4E50", "#FC913A", "#F9D423", "#EDE574", "#E1F5C4", "#FF6B6B", "#FF8E53", "#FFA07A"],
    emerald: ["#064E3B", "#047857", "#059669", "#10B981", "#34D399", "#6EE7B7", "#0F766E", "#14B8A6"],
    ocean: ["#0C4A6E", "#0369A1", "#0284C7", "#0EA5E9", "#38BDF8", "#7DD3FC", "#0284C7", "#075985"],
    luxe: ["#1E293B", "#334155", "#475569", "#64748B", "#94A3B8", "#CBD5E1", "#3B82F6", "#6366F1"]
  };

  let activeTheme = "rainbow";

  // --- State ---
  let entries = [];
  let spinning = false;
  let currentAngle = 0; // in radians
  let history = [];
  let lastWinIndex = -1;
  let currentVolume = 0.6;
  let isMuted = false;
  let previousSectorIndex = -1;

  // --- Audio Synthesis Engine ---
  let audioCtx = null;
  let masterGain = null;

  function initAudio() {
    if (!audioCtx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        audioCtx = new AudioContextClass();
        masterGain = audioCtx.createGain();
        masterGain.gain.setValueAtTime(isMuted ? 0 : currentVolume, audioCtx.currentTime);
        masterGain.connect(audioCtx.destination);
      }
    }
    if (audioCtx && audioCtx.state === "suspended") {
      audioCtx.resume();
    }
  }

  function setVolume(val) {
    currentVolume = parseFloat(val);
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(isMuted ? 0 : currentVolume, audioCtx.currentTime);
    }
    try {
      localStorage.setItem("stwol_volume", currentVolume.toString());
    } catch (e) {}
  }

  function toggleMute() {
    isMuted = !isMuted;
    if (masterGain && audioCtx) {
      masterGain.gain.setValueAtTime(isMuted ? 0 : currentVolume, audioCtx.currentTime);
    }
    const btn = document.getElementById("muteBtn");
    if (btn) {
      btn.innerHTML = isMuted ? "🔇" : "🔊";
      btn.setAttribute("aria-label", isMuted ? "Unmute sound" : "Mute sound");
    }
    try {
      localStorage.setItem("stwol_muted", isMuted ? "1" : "0");
    } catch (e) {}
  }

  function playTickSound() {
    if (isMuted || !audioCtx) return;
    try {
      const t = audioCtx.currentTime;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(800, t);
      osc.frequency.exponentialRampToValueAtTime(140, t + 0.025);

      gain.gain.setValueAtTime(0.35, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.025);

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(t);
      osc.stop(t + 0.03);

      const pointer = document.querySelector(".wheel-pointer");
      if (pointer) {
        pointer.classList.add("pointer-tick");
        setTimeout(() => pointer.classList.remove("pointer-tick"), 35);
      }
    } catch (e) {}
  }

  function startDrumroll(durationSec) {
    if (isMuted || !audioCtx) return;
    try {
      const beats = Math.floor(durationSec * 16);
      const startTime = audioCtx.currentTime;
      for (let i = 0; i < beats; i++) {
        const t = startTime + (i * durationSec) / beats;
        const bufferSize = Math.floor(audioCtx.sampleRate * 0.025);
        const buffer = audioCtx.createBuffer(1, bufferSize, audioCtx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let j = 0; j < bufferSize; j++) {
          data[j] = (Math.random() * 2 - 1) * Math.exp(-j / (bufferSize * 0.4));
        }
        const noise = audioCtx.createBufferSource();
        noise.buffer = buffer;
        const gain = audioCtx.createGain();
        gain.gain.setValueAtTime(0.2 + (0.5 * i) / beats, t);
        noise.connect(gain);
        gain.connect(masterGain);
        noise.start(t);
      }
    } catch (e) {}
  }

  function playWinSound() {
    if (isMuted || !audioCtx) return;
    try {
      const notes = [523.25, 659.25, 783.99, 1046.5];
      const startTime = audioCtx.currentTime;
      notes.forEach((freq, idx) => {
        const t = startTime + idx * 0.11;
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, t);
        gain.gain.setValueAtTime(0.4, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.45);
        osc.connect(gain);
        gain.connect(masterGain);
        osc.start(t);
        osc.stop(t + 0.5);
      });
    } catch (e) {}
  }

  // --- Cryptographically Secure Uniform Random Integer ---
  function getSecureRandomInt(max) {
    if (max <= 1) return 0;
    if (window.crypto && window.crypto.getRandomValues) {
      const buffer = new Uint32Array(1);
      const maxUint32 = 0xffffffff;
      const limit = maxUint32 - (maxUint32 % max);
      let rand;
      do {
        window.crypto.getRandomValues(buffer);
        rand = buffer[0];
      } while (rand >= limit);
      return rand % max;
    }
    return Math.floor(Math.random() * max);
  }

  // --- Canvas Wheel Renderer ---
  const canvas = document.getElementById("wheel");
  const ctx = canvas ? canvas.getContext("2d") : null;

  function getCanvasSize() {
    const w = window.innerWidth;
    if (document.fullscreenElement) {
      return Math.min(window.innerWidth * 0.75, window.innerHeight * 0.75, 600);
    }
    if (w <= 380) return 260;
    if (w <= 600) return 300;
    if (w <= 900) return 360;
    return 440;
  }

  function resizeCanvas() {
    if (!canvas || !ctx) return;
    const size = getCanvasSize();
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = size + "px";
    canvas.style.height = size + "px";

    const wrapper = canvas.closest(".wheel-wrapper");
    if (wrapper) {
      wrapper.style.width = size + "px";
      wrapper.style.height = size + "px";
    }

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.scale(dpr, dpr);

    drawWheel(currentAngle);
  }

  function drawWheel(angle) {
    if (!canvas || !ctx) return;
    const size = getCanvasSize();
    const cx = size / 2;
    const cy = size / 2;
    const radius = cx - 8;

    ctx.clearRect(0, 0, size, size);

    if (!entries.length) {
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(247, 151, 30, 0.08)";
      ctx.fill();
      ctx.strokeStyle = "rgba(247, 151, 30, 0.4)";
      ctx.lineWidth = 3;
      ctx.setLineDash([8, 6]);
      ctx.stroke();
      ctx.setLineDash([]);

      ctx.fillStyle = "#64748b";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.font = "bold 15px Nunito, sans-serif";
      ctx.fillText("Add names to the wheel!", cx, cy);
      return;
    }

    const totalWeight = entries.reduce((acc, e) => acc + (e.weight || 1), 0);
    let startAngle = angle;

    entries.forEach((entry) => {
      const sliceAngle = (Math.PI * 2 * (entry.weight || 1)) / totalWeight;
      const endAngle = startAngle + sliceAngle;

      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.arc(cx, cy, radius, startAngle, endAngle);
      ctx.closePath();

      ctx.fillStyle = entry.color;
      ctx.fill();

      ctx.strokeStyle = "rgba(255, 255, 255, 0.35)";
      ctx.lineWidth = entries.length > 50 ? 1 : 2;
      ctx.stroke();

      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(startAngle + sliceAngle / 2);

      ctx.textAlign = "right";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFFFFF";
      ctx.shadowColor = "rgba(0, 0, 0, 0.65)";
      ctx.shadowBlur = 4;

      let fontSize = 14;
      if (entries.length <= 8) fontSize = 16;
      else if (entries.length <= 16) fontSize = 14;
      else if (entries.length <= 32) fontSize = 12;
      else if (entries.length <= 60) fontSize = 10;
      else fontSize = 8;

      ctx.font = `700 ${fontSize}px Nunito, system-ui, sans-serif`;

      const maxTextWidth = radius * 0.72;
      let label = entry.text;
      if (ctx.measureText(label).width > maxTextWidth) {
        while (label.length > 2 && ctx.measureText(label + "…").width > maxTextWidth) {
          label = label.slice(0, -1);
        }
        label += "…";
      }

      ctx.fillText(label, radius - 14, 0);
      ctx.restore();

      startAngle = endAngle;
    });

    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(247, 151, 30, 0.85)";
    ctx.lineWidth = 6;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(cx, cy, radius - 3, 0, Math.PI * 2);
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // --- Wheel Spin & Manual Early-Stop Logic ---
  let activeStopTrigger = null;

  function stopWheel() {
    if (!spinning || typeof activeStopTrigger !== "function") return;
    activeStopTrigger();
  }

  function spinWheel() {
    if (spinning || entries.length < 2) return;
    initAudio();

    spinning = true;
    const spinBtn = document.getElementById("spinBtn");
    const stopBtn = document.getElementById("stopBtn");
    const centerBtn = document.querySelector(".center-circle");
    if (spinBtn) spinBtn.disabled = true;
    if (stopBtn) {
      stopBtn.hidden = false;
      stopBtn.disabled = false;
    }
    if (centerBtn) centerBtn.disabled = true;

    const resultBox = document.getElementById("resultValue");
    if (resultBox) resultBox.style.display = "none";

    const durationInput = document.getElementById("spinDuration");
    const durationSec = durationInput ? parseFloat(durationInput.value) : 5;
    const durationMs = durationSec * 1000;

    const totalWeight = entries.reduce((acc, e) => acc + (e.weight || 1), 0);
    const winInt = getSecureRandomInt(totalWeight);
    let cumulative = 0;
    let winIndex = 0;
    for (let i = 0; i < entries.length; i++) {
      cumulative += entries[i].weight || 1;
      if (winInt < cumulative) {
        winIndex = i;
        break;
      }
    }
    lastWinIndex = winIndex;

    let sliceStartAngle = 0;
    for (let i = 0; i < winIndex; i++) {
      sliceStartAngle += (Math.PI * 2 * (entries[i].weight || 1)) / totalWeight;
    }
    const winSliceSpan = (Math.PI * 2 * (entries[winIndex].weight || 1)) / totalWeight;
    const jitter = (Math.random() - 0.5) * winSliceSpan * 0.7;
    const winSliceMid = sliceStartAngle + winSliceSpan / 2 + jitter;

    const extraFullRotations = 6 + Math.floor(Math.random() * 4);
    const targetOffset = (Math.PI * 2 - (winSliceMid % (Math.PI * 2))) % (Math.PI * 2);
    const currentModulo = currentAngle % (Math.PI * 2);
    let delta = targetOffset - currentModulo;
    if (delta < 0) delta += Math.PI * 2;
    const totalRotation = Math.PI * 2 * extraFullRotations + delta;
    const startAngle = currentAngle;
    let finalTargetAngle = startAngle + totalRotation;

    const soundType = document.getElementById("soundSelect") ? document.getElementById("soundSelect").value : "tick";
    if (soundType === "drum") {
      startDrumroll(durationSec);
    }

    const startTime = performance.now();
    previousSectorIndex = -1;

    let stoppingEarly = false;
    let stopStartTime = 0;
    let stopStartAngle = 0;
    let stopTotalRotation = 0;
    const stopDurationMs = 380;

    activeStopTrigger = function () {
      if (stoppingEarly) return;
      stoppingEarly = true;
      stopStartTime = performance.now();
      stopStartAngle = currentAngle;
      const mod = stopStartAngle % (Math.PI * 2);
      let remDelta = targetOffset - mod;
      if (remDelta < 0) remDelta += Math.PI * 2;
      stopTotalRotation = Math.PI * 2 + remDelta;
      finalTargetAngle = stopStartAngle + stopTotalRotation;
      if (stopBtn) stopBtn.disabled = true;
    };

    function easeOutQuint(t) {
      return 1 - Math.pow(1 - t, 5);
    }

    function easeOutCubic(t) {
      return 1 - Math.pow(1 - t, 3);
    }

    function animate(now) {
      let progress;
      if (stoppingEarly) {
        const stopElapsed = now - stopStartTime;
        progress = Math.min(stopElapsed / stopDurationMs, 1);
        currentAngle = stopStartAngle + stopTotalRotation * easeOutCubic(progress);
      } else {
        const elapsed = now - startTime;
        progress = Math.min(elapsed / durationMs, 1);
        currentAngle = startAngle + totalRotation * easeOutQuint(progress);
      }
      drawWheel(currentAngle);

      if (soundType === "tick") {
        const normalizedAngle = (Math.PI * 2 - (currentAngle % (Math.PI * 2))) % (Math.PI * 2);
        let accumulated = 0;
        let activeSector = 0;
        for (let i = 0; i < entries.length; i++) {
          accumulated += (Math.PI * 2 * (entries[i].weight || 1)) / totalWeight;
          if (normalizedAngle < accumulated) {
            activeSector = i;
            break;
          }
        }
        if (activeSector !== previousSectorIndex) {
          playTickSound();
          previousSectorIndex = activeSector;
        }
      }

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        currentAngle = finalTargetAngle;
        drawWheel(currentAngle);
        spinning = false;
        activeStopTrigger = null;
        if (spinBtn) spinBtn.disabled = false;
        if (stopBtn) {
          stopBtn.hidden = true;
          stopBtn.disabled = false;
        }
        if (centerBtn) centerBtn.disabled = false;
        onSpinComplete(winIndex);
      }
    }

    requestAnimationFrame(animate);
  }

  function onSpinComplete(winIndex) {
    const winner = entries[winIndex];
    if (!winner) return;

    const rv = document.getElementById("resultValue");
    if (rv) {
      rv.textContent = winner.text;
      rv.style.display = "block";
    }

    const record = {
      text: winner.text,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }),
      timestamp: Date.now()
    };
    history.unshift(record);
    updateHistoryUI();
    updateStatsUI();

    playWinSound();

    const confettiToggle = document.getElementById("showConfetti");
    if (!confettiToggle || confettiToggle.checked) {
      launchConfetti();
    }

    const popupToggle = document.getElementById("showPopup");
    const shouldShowPopup = !popupToggle || popupToggle.checked;
    const removeToggle = document.getElementById("removeWinner");
    const shouldAutoRemove = Boolean(removeToggle && removeToggle.checked && entries.length > 1);

    if (shouldShowPopup) {
      setTimeout(() => {
        const modal = document.getElementById("resultModal");
        const modalResult = document.getElementById("modalResult");
        const modalRemoveBtn = document.getElementById("modalRemoveBtn");
        if (modalResult) modalResult.textContent = winner.text;
        if (shouldAutoRemove && winIndex >= 0 && winIndex < entries.length) {
          removeEntry(winIndex);
          lastWinIndex = -1;
          if (modalRemoveBtn) modalRemoveBtn.style.display = "none";
        } else if (modalRemoveBtn) {
          modalRemoveBtn.style.display = entries.length > 1 ? "inline-block" : "none";
        }
        if (modal) openAccessibleModal(modal);
      }, 350);
    } else if (shouldAutoRemove) {
      setTimeout(() => {
        if (winIndex >= 0 && winIndex < entries.length) {
          removeEntry(winIndex);
          lastWinIndex = -1;
        }
      }, 500);
    }
  }

  function removeWinnerAndClose() {
    if (lastWinIndex >= 0 && lastWinIndex < entries.length) {
      removeEntry(lastWinIndex);
      lastWinIndex = -1;
    }
    closeModal();
  }

  function copyWinnerResult() {
    const el = document.getElementById("modalResult");
    const text = el ? el.textContent.trim() : "";
    if (!text) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => showToast(`📋 Copied "${text}"!`));
    } else {
      copyFallback(text, `📋 Copied "${text}"!`);
    }
  }

  let lastFocusedElement = null;

  function openAccessibleModal(modalEl, focusSelector) {
    if (!modalEl) return;
    if (document.activeElement && typeof document.activeElement.focus === "function") {
      lastFocusedElement = document.activeElement;
    }
    modalEl.classList.add("open");
    modalEl.setAttribute("aria-hidden", "false");
    const target = focusSelector
      ? modalEl.querySelector(focusSelector)
      : modalEl.querySelector("button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), a[href]");
    if (target && typeof target.focus === "function") {
      setTimeout(() => target.focus({ preventScroll: true }), 20);
    }
  }

  function restoreLastFocus() {
    if (lastFocusedElement && document.contains(lastFocusedElement) && typeof lastFocusedElement.focus === "function") {
      lastFocusedElement.focus({ preventScroll: true });
    }
    lastFocusedElement = null;
  }

  function closeModal() {
    let wasOpen = false;
    ["resultModal", "qrModal", "embedModal"].forEach((id) => {
      const m = document.getElementById(id);
      if (m && m.classList.contains("open")) {
        m.classList.remove("open");
        m.setAttribute("aria-hidden", "true");
        wasOpen = true;
      }
    });
    if (wasOpen) restoreLastFocus();
  }

  // --- Entries & Per-Slice Weight Management ---
  function renderEntries() {
    const list = document.getElementById("entriesList");
    if (!list) return;
    list.innerHTML = "";

    if (!entries.length) {
      list.innerHTML = '<div class="empty-entries">No entries added yet. Use presets or type above!</div>';
      drawWheel(currentAngle);
      updateStatsUI();
      return;
    }

    const totalWeight = entries.reduce((acc, e) => acc + (e.weight || 1), 0);
    const hasCustomWeights = entries.some((e) => (e.weight || 1) > 1);
    const fragment = document.createDocumentFragment();

    entries.forEach((e, i) => {
      const w = e.weight || 1;
      const pct = totalWeight > 0 ? ((w / totalWeight) * 100).toFixed(1) : "0";
      const item = document.createElement("div");
      item.className = "entry-item";
      item.setAttribute("role", "listitem");
      item.innerHTML = `
        <span class="entry-color" style="background:${e.color}"></span>
        <span class="entry-text" title="${escapeHtml(e.text)}">${escapeHtml(e.text)}</span>
        <div class="entry-weight-wrap" title="Adjust slice probability weight (${pct}% chance)">
          <button class="weight-btn" type="button" onclick="window.stwol.adjustWeight(${i}, -1)" aria-label="Decrease weight for ${escapeHtml(e.text)}">−</button>
          <span class="weight-badge ${w > 1 ? "weighted" : ""}">${w}x${hasCustomWeights ? ` · ${pct}%` : ""}</span>
          <button class="weight-btn" type="button" onclick="window.stwol.adjustWeight(${i}, 1)" aria-label="Increase weight for ${escapeHtml(e.text)}">+</button>
        </div>
        <button class="entry-del" type="button" onclick="window.stwol.removeEntry(${i})" aria-label="Remove ${escapeHtml(e.text)}">✕</button>
      `;
      fragment.appendChild(item);
    });
    list.appendChild(fragment);

    drawWheel(currentAngle);
    updateStatsUI();
  }

  function adjustWeight(index, delta) {
    if (index < 0 || index >= entries.length) return;
    const current = entries[index].weight || 1;
    const next = Math.max(1, Math.min(20, current + delta));
    if (next === current) return;
    entries[index].weight = next;
    renderEntries();
    saveToStorage();
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function addEntry(textOverride) {
    const input = document.getElementById("newEntry");
    const raw = textOverride || (input ? input.value : "");
    const trimmed = raw.trim();
    if (!trimmed) return;

    const allowDup = document.getElementById("allowDuplicates")?.checked;
    if (!allowDup && entries.some((e) => e.text.toLowerCase() === trimmed.toLowerCase())) {
      if (input) {
        input.classList.add("input-error");
        setTimeout(() => input.classList.remove("input-error"), 900);
      }
      return;
    }

    if (entries.length >= 500) {
      alert("Maximum capacity reached (500 entries).");
      return;
    }

    const palette = THEMES[activeTheme] || THEMES.rainbow;
    const color = palette[entries.length % palette.length];

    entries.push({
      text: trimmed.slice(0, 50),
      color: color,
      weight: 1
    });

    if (input && !textOverride) input.value = "";
    renderEntries();
    saveToStorage();
  }

  function removeEntry(index) {
    if (index >= 0 && index < entries.length) {
      entries.splice(index, 1);
      const palette = THEMES[activeTheme] || THEMES.rainbow;
      entries.forEach((e, i) => {
        e.color = palette[i % palette.length];
      });
      renderEntries();
      saveToStorage();
    }
  }

  function clearAllEntries() {
    if (!entries.length) return;
    if (confirm("Are you sure you want to clear all entries from the wheel?")) {
      entries = [];
      renderEntries();
      saveToStorage();
    }
  }

  function shuffleEntries() {
    if (entries.length < 2) return;
    for (let i = entries.length - 1; i > 0; i--) {
      const j = getSecureRandomInt(i + 1);
      [entries[i], entries[j]] = [entries[j], entries[i]];
    }
    const palette = THEMES[activeTheme] || THEMES.rainbow;
    entries.forEach((e, idx) => {
      e.color = palette[idx % palette.length];
    });
    renderEntries();
    saveToStorage();
  }

  function sortEntries() {
    if (entries.length < 2) return;
    entries.sort((a, b) => a.text.localeCompare(b.text, undefined, { numeric: true, sensitivity: "base" }));
    const palette = THEMES[activeTheme] || THEMES.rainbow;
    entries.forEach((e, idx) => {
      e.color = palette[idx % palette.length];
    });
    renderEntries();
    saveToStorage();
  }

  function setTheme(themeKey) {
    if (!THEMES[themeKey]) return;
    activeTheme = themeKey;
    const palette = THEMES[activeTheme];
    entries.forEach((e, idx) => {
      e.color = palette[idx % palette.length];
    });
    renderEntries();
    try {
      localStorage.setItem("stwol_theme", activeTheme);
    } catch (e) {}
  }

  function toggleBulk() {
    const area = document.getElementById("bulkArea");
    if (!area) return;
    const isOpen = area.classList.toggle("open");
    area.hidden = !isOpen;
    if (isOpen) {
      const input = document.getElementById("bulkInput");
      if (input) input.focus();
    }
  }

  function addBulkEntries() {
    const area = document.getElementById("bulkInput");
    if (!area) return;
    const raw = area.value;
    if (!raw.trim()) return;

    const parts = raw
      .split(/[\n,;]+/)
      .map((s) => s.trim())
      .filter((s) => s.length > 0);

    const allowDup = document.getElementById("allowDuplicates")?.checked;
    const palette = THEMES[activeTheme] || THEMES.rainbow;
    let addedCount = 0;

    parts.forEach((itemText) => {
      if (entries.length >= 500) return;
      const clean = itemText.slice(0, 50);
      if (!allowDup && entries.some((e) => e.text.toLowerCase() === clean.toLowerCase())) {
        return;
      }
      entries.push({
        text: clean,
        color: palette[entries.length % palette.length],
        weight: 1
      });
      addedCount++;
    });

    area.value = "";
    toggleBulk();
    renderEntries();
    saveToStorage();

    showToast(`✅ ${addedCount} entries successfully added to wheel!`);
  }

  function loadPreset(key) {
    let presetItems = [];
    if (window.stwol_presets && window.stwol_presets[key]) {
      presetItems = window.stwol_presets[key].items || [];
    } else {
      const defaults = {
        yesno: ["Yes ✅", "No ❌", "Maybe 🤔", "Ask Again 🔄"],
        drawnames: ["Oliver", "Charlotte", "Amelia", "Henry", "Lucas", "Mia", "Benjamin", "Sophia"],
        dinner: ["Pizza 🍕", "Sushi Rolls 🍣", "Tacos 🌮", "Italian Pasta 🍝", "Burgers 🍔", "Asian Stir Fry 🍜"],
        numbers: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
      };
      presetItems = defaults[key] || defaults.drawnames;
    }

    const palette = THEMES[activeTheme] || THEMES.rainbow;
    entries = presetItems.map((text, idx) => ({
      text: String(text).slice(0, 50),
      color: palette[idx % palette.length],
      weight: 1
    }));

    renderEntries();
    saveToStorage();
    const toolEl = document.getElementById("tool");
    if (toolEl) toolEl.scrollIntoView({ behavior: "smooth" });
  }

  // --- History & Stats ---
  function updateHistoryUI() {
    const list = document.getElementById("historyList");
    if (!list) return;
    if (!history.length) {
      list.innerHTML = '<div class="empty-entries">No spins recorded yet.</div>';
      return;
    }
    list.innerHTML = "";
    history.slice(0, 30).forEach((item, idx) => {
      const row = document.createElement("div");
      row.className = "history-item";
      row.innerHTML = `
        <span class="hi-num">#${idx + 1}</span>
        <span class="hi-text">${escapeHtml(item.text)}</span>
        <span class="hi-time">${item.time}</span>
      `;
      list.appendChild(row);
    });
  }

  function clearHistory() {
    history = [];
    updateHistoryUI();
    updateStatsUI();
  }

  function exportHistoryCSV() {
    if (!history.length) {
      alert("No spin history to export.");
      return;
    }
    let csv = "Index,Winning Entry,Timestamp\n";
    history.forEach((h, idx) => {
      csv += `"${idx + 1}","${h.text.replace(/"/g, '""')}","${h.time}"\n`;
    });
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `spin-history-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function updateStatsUI() {
    const statsContainer = document.getElementById("statsList");
    if (!statsContainer) return;
    if (!history.length || !entries.length) {
      statsContainer.innerHTML = '<div class="empty-entries">Spin the wheel to view empirical odds!</div>';
      return;
    }

    const counts = {};
    history.forEach((h) => {
      counts[h.text] = (counts[h.text] || 0) + 1;
    });

    const totalSpins = history.length;
    let html = '<div class="stats-grid">';
    entries.forEach((e) => {
      const count = counts[e.text] || 0;
      const pct = ((count / totalSpins) * 100).toFixed(1);
      html += `
        <div class="stat-row">
          <span class="stat-color" style="background:${e.color}"></span>
          <span class="stat-name">${escapeHtml(e.text)}</span>
          <span class="stat-count">${count}x (${pct}%)</span>
        </div>
      `;
    });
    html += "</div>";
    statsContainer.innerHTML = html;
  }

  // --- Saved Wheels Manager ---
  function saveCurrentWheel() {
    if (!entries.length) {
      alert("Wheel is empty. Add entries before saving.");
      return;
    }
    const name = prompt("Enter a title for this wheel (e.g., 'Grade 5 Class' or 'Family Game Night'):");
    if (!name || !name.trim()) return;

    try {
      const saved = JSON.parse(localStorage.getItem("stwol_saved_wheels") || "{}");
      saved[name.trim()] = entries.map((e) => ({ text: e.text, weight: e.weight || 1 }));
      localStorage.setItem("stwol_saved_wheels", JSON.stringify(saved));
      renderSavedWheelsDropdown();
      showToast(`Saved "${name.trim()}" successfully!`);
    } catch (e) {
      console.error(e);
    }
  }

  function renderSavedWheelsDropdown() {
    const select = document.getElementById("savedWheelsSelect");
    if (!select) return;
    try {
      const saved = JSON.parse(localStorage.getItem("stwol_saved_wheels") || "{}");
      select.innerHTML = '<option value="">-- Load Saved Wheel --</option>';
      Object.keys(saved).forEach((wheelName) => {
        const opt = document.createElement("option");
        opt.value = wheelName;
        opt.textContent = `${wheelName} (${saved[wheelName].length} items)`;
        select.appendChild(opt);
      });
    } catch (e) {}
  }

  function loadSelectedSavedWheel(wheelName) {
    if (!wheelName) return;
    try {
      const saved = JSON.parse(localStorage.getItem("stwol_saved_wheels") || "{}");
      const list = saved[wheelName];
      if (Array.isArray(list) && list.length) {
        const palette = THEMES[activeTheme] || THEMES.rainbow;
        entries = list.map((item, idx) => {
          const text = typeof item === "object" && item !== null ? item.text : item;
          const weight = typeof item === "object" && item !== null && item.weight ? Number(item.weight) : 1;
          return {
            text: String(text).slice(0, 50),
            color: palette[idx % palette.length],
            weight: Math.max(1, Math.min(20, weight))
          };
        });
        renderEntries();
        saveToStorage();
        showToast(`Loaded "${wheelName}"!`);
      }
    } catch (e) {}
  }

  // --- Share, Real QR Code & Embed Widget ---
  function buildShareUrl() {
    const texts = entries.map((e) => e.text);
    const json = JSON.stringify(texts);
    const bytes = new TextEncoder().encode(json);
    let bin = "";
    for (let i = 0; i < bytes.length; i++) bin += String.fromCharCode(bytes[i]);
    const encoded = btoa(bin);
    return window.location.origin + window.location.pathname + "?w=" + encodeURIComponent(encoded);
  }

  function shareWheel() {
    try {
      const url = buildShareUrl();
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(url).then(() => {
          showToast("🔗 Wheel share link copied to clipboard!");
        });
      } else {
        copyFallback(url, "🔗 Wheel share link copied to clipboard!");
      }
    } catch (e) {
      alert("Could not generate share link for this list.");
    }
  }

  function openQRModal() {
    try {
      const url = buildShareUrl();
      const qrModal = document.getElementById("qrModal");
      const qrCanvas = document.getElementById("qrCanvas");
      const qrLinkInput = document.getElementById("qrLinkInput");

      if (qrLinkInput) qrLinkInput.value = url;
      if (qrCanvas) drawQRCode(qrCanvas, url);
      if (qrModal) openAccessibleModal(qrModal);
    } catch (e) {
      console.error(e);
    }
  }

  function openEmbedModal() {
    const modal = document.getElementById("embedModal");
    if (!modal) return;
    updateEmbedCode();
    openAccessibleModal(modal);
  }

  function updateEmbedCode() {
    const ta = document.getElementById("embedCodeTextarea");
    const heightSel = document.getElementById("embedHeightSelect");
    if (!ta) return;
    const h = heightSel ? heightSel.value : "640";
    const path = window.location.pathname === "/" ? "" : window.location.pathname;
    const src = "https://spinthewheelsonline.com" + path + "?embed=1";
    const title = document.title.replace(/"/g, "&quot;");
    ta.value =
      `<iframe src="${src}" width="100%" height="${h}" frameborder="0" loading="lazy" style="border:0;border-radius:12px;" title="${title}"></iframe>\n` +
      `<p style="font-size:12px;margin-top:6px;">Powered by <a href="https://spinthewheelsonline.com${path}" target="_blank" rel="noopener">SpinTheWheelsOnline.com</a></p>`;
  }

  function copyEmbedCode() {
    const ta = document.getElementById("embedCodeTextarea");
    if (!ta) return;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(ta.value).then(() => {
        showToast("🖼️ Embed HTML snippet copied!");
      });
    } else {
      copyFallback(ta.value, "🖼️ Embed HTML snippet copied!");
    }
  }

  /* =========================================================
     ISO/IEC 18004 COMPLIANT PURE-JS QR ENCODER (Byte Mode, EC Level L)
     Versions 1–14 (supports up to 458 UTF-8 bytes cleanly)
  ========================================================= */
  const QR_SPEC = [
    null,
    [1, 19, 7, 0, 0, 0],
    [1, 34, 10, 0, 0, 7],
    [1, 55, 15, 0, 0, 7],
    [1, 80, 20, 0, 0, 7],
    [1, 108, 26, 0, 0, 7],
    [2, 68, 18, 0, 0, 7],
    [2, 78, 20, 0, 0, 0],
    [2, 97, 24, 0, 0, 0],
    [2, 116, 30, 0, 0, 0],
    [2, 68, 18, 2, 69, 0],
    [4, 81, 20, 0, 0, 0],
    [2, 92, 24, 2, 93, 0],
    [4, 107, 26, 0, 0, 0],
    [3, 115, 30, 1, 116, 3]
  ];

  const QR_ALIGN = [
    [], [], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34],
    [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50],
    [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66]
  ];

  const GF_EXP = new Uint8Array(512);
  const GF_LOG = new Uint8Array(256);
  (function initGF() {
    let x = 1;
    for (let i = 0; i < 255; i++) {
      GF_EXP[i] = x;
      GF_LOG[x] = i;
      x <<= 1;
      if (x & 0x100) x ^= 0x11d;
    }
    for (let i = 255; i < 512; i++) GF_EXP[i] = GF_EXP[i - 255];
  })();

  function gfMul(a, b) {
    return a === 0 || b === 0 ? 0 : GF_EXP[GF_LOG[a] + GF_LOG[b]];
  }

  function rsGeneratorPoly(ecLen) {
    let poly = [1];
    for (let i = 0; i < ecLen; i++) {
      const next = new Array(poly.length + 1).fill(0);
      const factor = GF_EXP[i];
      for (let j = 0; j < poly.length; j++) {
        next[j] ^= poly[j];
        next[j + 1] ^= gfMul(poly[j], factor);
      }
      poly = next;
    }
    return poly;
  }

  function rsComputeEC(data, ecLen) {
    const gen = rsGeneratorPoly(ecLen);
    const res = new Array(data.length + ecLen).fill(0);
    for (let i = 0; i < data.length; i++) res[i] = data[i];
    for (let i = 0; i < data.length; i++) {
      const coef = res[i];
      if (coef !== 0) {
        for (let j = 0; j < gen.length; j++) {
          res[i + j] ^= gfMul(gen[j], coef);
        }
      }
    }
    return res.slice(data.length);
  }

  function bchFormatBits(maskIdx) {
    // EC Level L = 01 (binary) -> data = (1 << 3) | maskIdx
    const data = (1 << 3) | maskIdx;
    let d = data << 10;
    while ((d >> 10) !== 0) {
      const shift = Math.floor(Math.log2(d)) - 10;
      d ^= 0x537 << shift;
    }
    return ((data << 10) | d) ^ 0x5412;
  }

  function bchVersionBits(ver) {
    let d = ver << 12;
    while ((d >> 12) !== 0) {
      const shift = Math.floor(Math.log2(d)) - 12;
      d ^= 0x1f25 << shift;
    }
    return (ver << 12) | d;
  }

  function generateQRMatrix(text) {
    const utf8 = typeof TextEncoder !== "undefined"
      ? Array.from(new TextEncoder().encode(String(text)))
      : String(text).split("").map((c) => c.charCodeAt(0) & 0xff);

    let ver = 1;
    while (ver < QR_SPEC.length) {
      const sp = QR_SPEC[ver];
      const totalDataBytes = sp[0] * sp[1] + sp[3] * sp[4];
      const ccBits = ver < 10 ? 8 : 16;
      const capBytes = Math.floor((totalDataBytes * 8 - 4 - ccBits) / 8);
      if (utf8.length <= capBytes) break;
      ver++;
    }
    if (ver >= QR_SPEC.length) ver = QR_SPEC.length - 1;

    const sp = QR_SPEC[ver];
    const totalDataBytes = sp[0] * sp[1] + sp[3] * sp[4];
    const ecPerBlock = sp[2];
    const ccBits = ver < 10 ? 8 : 16;

    // Bit buffer
    const bits = [];
    const pushBits = (val, len) => {
      for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
    };
    pushBits(0b0100, 4); // Byte mode
    const maxDataBytesForVersion = Math.floor((totalDataBytes * 8 - 4 - ccBits) / 8);
    const payload = utf8.slice(0, maxDataBytesForVersion);
    pushBits(payload.length, ccBits);
    payload.forEach((b) => pushBits(b, 8));

    const maxBits = totalDataBytes * 8;
    const termLen = Math.min(4, maxBits - bits.length);
    for (let i = 0; i < termLen; i++) bits.push(0);
    while (bits.length % 8 !== 0) bits.push(0);

    const dataBytes = [];
    for (let i = 0; i < bits.length; i += 8) {
      let byte = 0;
      for (let b = 0; b < 8; b++) byte = (byte << 1) | bits[i + b];
      dataBytes.push(byte);
    }
    const padBytes = [0xec, 0x11];
    let pIdx = 0;
    while (dataBytes.length < totalDataBytes) {
      dataBytes.push(padBytes[pIdx % 2]);
      pIdx++;
    }

    // Split into RS blocks & compute EC
    const blocks = [];
    const ecs = [];
    let offset = 0;
    for (let b = 0; b < sp[0]; b++) {
      const slice = dataBytes.slice(offset, offset + sp[1]);
      blocks.push(slice);
      ecs.push(rsComputeEC(slice, ecPerBlock));
      offset += sp[1];
    }
    for (let b = 0; b < sp[3]; b++) {
      const slice = dataBytes.slice(offset, offset + sp[4]);
      blocks.push(slice);
      ecs.push(rsComputeEC(slice, ecPerBlock));
      offset += sp[4];
    }

    const interleaved = [];
    const maxBlockLen = Math.max(sp[1], sp[4] || 0);
    for (let i = 0; i < maxBlockLen; i++) {
      for (let b = 0; b < blocks.length; b++) {
        if (i < blocks[b].length) interleaved.push(blocks[b][i]);
      }
    }
    for (let i = 0; i < ecPerBlock; i++) {
      for (let b = 0; b < ecs.length; b++) {
        interleaved.push(ecs[b][i]);
      }
    }

    const codeBits = [];
    interleaved.forEach((byte) => {
      for (let b = 7; b >= 0; b--) codeBits.push((byte >> b) & 1);
    });
    for (let r = 0; r < sp[5]; r++) codeBits.push(0);

    const size = 17 + 4 * ver;
    const modules = Array.from({ length: size }, () => new Array(size).fill(false));
    const isFunc = Array.from({ length: size }, () => new Array(size).fill(false));

    function setFunc(r, c, dark) {
      if (r >= 0 && r < size && c >= 0 && c < size) {
        modules[r][c] = Boolean(dark);
        isFunc[r][c] = true;
      }
    }

    function placeFinder(top, left) {
      for (let dr = -1; dr <= 7; dr++) {
        for (let dc = -1; dc <= 7; dc++) {
          const r = top + dr;
          const c = left + dc;
          if (r < 0 || r >= size || c < 0 || c >= size) continue;
          const isSep = dr === -1 || dr === 7 || dc === -1 || dc === 7;
          const isOuter = dr === 0 || dr === 6 || dc === 0 || dc === 6;
          const isCore = dr >= 2 && dr <= 4 && dc >= 2 && dc <= 4;
          setFunc(r, c, !isSep && (isOuter || isCore));
        }
      }
    }

    placeFinder(0, 0);
    placeFinder(0, size - 7);
    placeFinder(size - 7, 0);

    // Alignment patterns
    const alignCoords = QR_ALIGN[ver] || [];
    for (let i = 0; i < alignCoords.length; i++) {
      for (let j = 0; j < alignCoords.length; j++) {
        const cr = alignCoords[i];
        const cc = alignCoords[j];
        if (isFunc[cr][cc]) continue;
        for (let dr = -2; dr <= 2; dr++) {
          for (let dc = -2; dc <= 2; dc++) {
            const dist = Math.max(Math.abs(dr), Math.abs(dc));
            setFunc(cr + dr, cc + dc, dist === 2 || dist === 0);
          }
        }
      }
    }

    // Timing patterns
    for (let i = 8; i < size - 8; i++) {
      const bit = i % 2 === 0;
      if (!isFunc[6][i]) setFunc(6, i, bit);
      if (!isFunc[i][6]) setFunc(i, 6, bit);
    }

    // Dark module + reserve format areas
    setFunc(size - 8, 8, true);
    for (let i = 0; i < 9; i++) {
      if (!isFunc[8][i]) setFunc(8, i, false);
      if (!isFunc[i][8]) setFunc(i, 8, false);
    }
    for (let i = size - 8; i < size; i++) {
      if (!isFunc[8][i]) setFunc(8, i, false);
      if (!isFunc[i][8]) setFunc(i, 8, false);
    }

    // Version info if ver >= 7
    if (ver >= 7) {
      const vBits = bchVersionBits(ver);
      for (let i = 0; i < 18; i++) {
        const bit = ((vBits >> i) & 1) === 1;
        const a = Math.floor(i / 3);
        const b = size - 11 + (i % 3);
        setFunc(a, b, bit);
        setFunc(b, a, bit);
      }
    }

    // Place data bits zigzag
    let bitIdx = 0;
    for (let right = size - 1; right >= 1; right -= 2) {
      if (right === 6) right = 5;
      for (let vert = 0; vert < size; vert++) {
        for (let j = 0; j < 2; j++) {
          const c = right - j;
          const upward = ((right + 1) & 2) === 0;
          const r = upward ? size - 1 - vert : vert;
          if (!isFunc[r][c]) {
            modules[r][c] = bitIdx < codeBits.length ? codeBits[bitIdx] === 1 : false;
            bitIdx++;
          }
        }
      }
    }

    // Apply mask & evaluate penalty (pick best mask 0..7)
    const maskFn = [
      (r, c) => (r + c) % 2 === 0,
      (r) => r % 2 === 0,
      (_, c) => c % 3 === 0,
      (r, c) => (r + c) % 3 === 0,
      (r, c) => (Math.floor(r / 2) + Math.floor(c / 3)) % 2 === 0,
      (r, c) => ((r * c) % 2) + ((r * c) % 3) === 0,
      (r, c) => (((r * c) % 2) + ((r * c) % 3)) % 2 === 0,
      (r, c) => (((r + c) % 2) + ((r * c) % 3)) % 2 === 0
    ];

    function applyFormat(grid, maskId) {
      const fmt = bchFormatBits(maskId);
      for (let i = 0; i <= 5; i++) grid[8][i] = ((fmt >> i) & 1) === 1;
      grid[8][7] = ((fmt >> 6) & 1) === 1;
      grid[8][8] = ((fmt >> 7) & 1) === 1;
      grid[7][8] = ((fmt >> 8) & 1) === 1;
      for (let i = 9; i < 15; i++) grid[14 - i][8] = ((fmt >> i) & 1) === 1;

      for (let i = 0; i < 8; i++) grid[size - 1 - i][8] = ((fmt >> i) & 1) === 1;
      for (let i = 8; i < 15; i++) grid[8][size - 15 + i] = ((fmt >> i) & 1) === 1;
      grid[size - 8][8] = true;
    }

    let bestGrid = null;
    let minPenalty = Infinity;

    for (let m = 0; m < 8; m++) {
      const test = modules.map((row, r) =>
        row.map((val, c) => (isFunc[r][c] ? val : maskFn[m](r, c) ? !val : val))
      );
      applyFormat(test, m);

      let penalty = 0;
      for (let r = 0; r < size; r++) {
        let run = 1;
        for (let c = 1; c < size; c++) {
          if (test[r][c] === test[r][c - 1]) run++;
          else {
            if (run >= 5) penalty += run - 2;
            run = 1;
          }
        }
        if (run >= 5) penalty += run - 2;
      }
      for (let c = 0; c < size; c++) {
        let run = 1;
        for (let r = 1; r < size; r++) {
          if (test[r][c] === test[r - 1][c]) run++;
          else {
            if (run >= 5) penalty += run - 2;
            run = 1;
          }
        }
        if (run >= 5) penalty += run - 2;
      }
      if (penalty < minPenalty) {
        minPenalty = penalty;
        bestGrid = test;
      }
    }

    return bestGrid;
  }

  function drawQRCode(targetCanvas, text) {
    const matrix = generateQRMatrix(text);
    const count = matrix.length;
    const quiet = 4;
    const totalModules = count + quiet * 2;
    const cell = Math.max(3, Math.floor(220 / totalModules));
    const pxSize = totalModules * cell;

    targetCanvas.width = pxSize;
    targetCanvas.height = pxSize;
    targetCanvas.style.width = pxSize + "px";
    targetCanvas.style.height = pxSize + "px";

    const qctx = targetCanvas.getContext("2d");
    qctx.fillStyle = "#FFFFFF";
    qctx.fillRect(0, 0, pxSize, pxSize);

    qctx.fillStyle = "#0F172A";
    for (let r = 0; r < count; r++) {
      for (let c = 0; c < count; c++) {
        if (matrix[r][c]) {
          qctx.fillRect((c + quiet) * cell, (r + quiet) * cell, cell, cell);
        }
      }
    }
  }

  function copyFallback(text, msg) {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.opacity = "0";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try {
      document.execCommand("copy");
      showToast(msg || "🔗 Copied to clipboard!");
    } catch (e) {}
    document.body.removeChild(ta);
  }

  function showToast(msg) {
    const toast = document.getElementById("shareToast");
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add("show");
    setTimeout(() => toast.classList.remove("show"), 3200);
  }

  // --- Fullscreen API ---
  function toggleFullscreen() {
    const tool = document.getElementById("tool");
    if (!tool) return;
    if (!document.fullscreenElement) {
      if (tool.requestFullscreen) {
        tool.requestFullscreen();
      } else if (tool.webkitRequestFullscreen) {
        tool.webkitRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }

  // --- Confetti Cannon ---
  const confCanvas = document.getElementById("confetti-canvas");
  const confCtx = confCanvas ? confCanvas.getContext("2d") : null;
  let confParticles = [];
  let confAnimId = null;

  function launchConfetti() {
    if (!confCanvas || !confCtx) return;
    confCanvas.width = window.innerWidth;
    confCanvas.height = window.innerHeight;
    confParticles = [];

    const palette = THEMES[activeTheme] || THEMES.rainbow;
    for (let i = 0; i < 220; i++) {
      confParticles.push({
        x: confCanvas.width / 2 + (Math.random() - 0.5) * 200,
        y: confCanvas.height * 0.4,
        w: 7 + Math.random() * 10,
        h: 9 + Math.random() * 12,
        color: palette[Math.floor(Math.random() * palette.length)],
        vx: (Math.random() - 0.5) * 16,
        vy: -8 - Math.random() * 14,
        rot: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 12,
        alpha: 1
      });
    }

    if (confAnimId) cancelAnimationFrame(confAnimId);
    animateConfetti();
    setTimeout(() => {
      if (confAnimId) cancelAnimationFrame(confAnimId);
      if (confCtx) confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);
    }, 4200);
  }

  function animateConfetti() {
    if (!confCtx) return;
    confCtx.clearRect(0, 0, confCanvas.width, confCanvas.height);

    confParticles.forEach((p) => {
      confCtx.save();
      confCtx.translate(p.x, p.y);
      confCtx.rotate((p.rot * Math.PI) / 180);
      confCtx.fillStyle = p.color;
      confCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
      confCtx.restore();

      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.35;
      p.vx *= 0.98;
      p.rot += p.rotSpeed;
    });

    confParticles = confParticles.filter((p) => p.y < confCanvas.height + 40);
    if (confParticles.length) {
      confAnimId = requestAnimationFrame(animateConfetti);
    }
  }

  // --- Per-Path Persistence ---
  function getEntriesStorageKey() {
    const cleanPath = (window.location.pathname || "/").replace(/\/+$/, "") || "/";
    return "stwol_entries_" + cleanPath;
  }

  function saveToStorage() {
    try {
      localStorage.setItem(
        getEntriesStorageKey(),
        JSON.stringify(entries.map((e) => ({ text: e.text, weight: e.weight || 1 })))
      );
    } catch (e) {}
  }

  function decodeShareParam(shared) {
    try {
      const bin = atob(shared);
      const bytes = new Uint8Array(bin.length);
      for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
      const jsonStr = new TextDecoder().decode(bytes);
      return JSON.parse(jsonStr);
    } catch (e) {
      return JSON.parse(decodeURIComponent(atob(shared)));
    }
  }

  function loadFromStorage() {
    const palette = THEMES[activeTheme] || THEMES.rainbow;
    const mapLoaded = (arr) =>
      arr.slice(0, 500).map((item, idx) => {
        const text = typeof item === "object" && item !== null ? item.text : item;
        const weight = typeof item === "object" && item !== null && item.weight ? Number(item.weight) : 1;
        return {
          text: String(text).slice(0, 50),
          color: palette[idx % palette.length],
          weight: Math.max(1, Math.min(20, weight))
        };
      });

    // 1. Check share URL parameter first
    try {
      const params = new URLSearchParams(window.location.search);
      const shared = params.get("w");
      if (shared) {
        const decoded = decodeShareParam(shared);
        if (Array.isArray(decoded) && decoded.length) {
          entries = mapLoaded(decoded);
          if (params.get("embed") !== "1") {
            window.history.replaceState({}, "", window.location.pathname);
          }
          return;
        }
      }
    } catch (e) {}

    // 2. Per-path LocalStorage saved entries (preserve user edits across reloads)
    try {
      const saved = localStorage.getItem(getEntriesStorageKey());
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) {
          entries = mapLoaded(parsed);
          return;
        }
      }
    } catch (e) {}

    // 3. Specialized initial items (tool pages)
    if (window.stwol_initial_items && Array.isArray(window.stwol_initial_items) && window.stwol_initial_items.length) {
      entries = mapLoaded(window.stwol_initial_items);
      return;
    }

    // 4. Vibrant default starter entries for homepage / hubs
    const starter =
      window.stwol_presets && window.stwol_presets.drawnames && Array.isArray(window.stwol_presets.drawnames.items)
        ? window.stwol_presets.drawnames.items
        : ["Oliver", "Charlotte", "Amelia", "Henry", "Lucas", "Mia", "Benjamin", "Sophia"];
    entries = mapLoaded(starter);
  }

  function resetDefaultEntries() {
    try {
      localStorage.removeItem(getEntriesStorageKey());
    } catch (e) {}
    const palette = THEMES[activeTheme] || THEMES.rainbow;
    const defaults =
      window.stwol_initial_items && Array.isArray(window.stwol_initial_items) && window.stwol_initial_items.length
        ? window.stwol_initial_items
        : (window.stwol_presets && window.stwol_presets.drawnames && Array.isArray(window.stwol_presets.drawnames.items)
            ? window.stwol_presets.drawnames.items
            : ["Oliver", "Charlotte", "Amelia", "Henry", "Lucas", "Mia", "Benjamin", "Sophia"]);
    entries = defaults.slice(0, 500).map((item, idx) => ({
      text: String(typeof item === "object" && item !== null ? item.text : item).slice(0, 50),
      color: palette[idx % palette.length],
      weight: 1
    }));
    renderEntries();
    showToast("↺ Wheel reset to default items!");
  }

  // --- Storage Helper with Cookie Fallback ---
  const Storage = {
    get: function (key) {
      try {
        const val = localStorage.getItem(key);
        if (val !== null) return val;
      } catch (e) {}
      try {
        const m = document.cookie.match(new RegExp("(?:^|; )" + key + "=([^;]*)"));
        return m ? decodeURIComponent(m[1]) : null;
      } catch (e) {}
      return null;
    },
    set: function (key, val) {
      try {
        localStorage.setItem(key, val);
      } catch (e) {}
      try {
        document.cookie = key + "=" + encodeURIComponent(val) + ";path=/;max-age=31536000;SameSite=Lax";
      } catch (e) {}
    }
  };

  // --- Complete 35 Multilingual Catalog Meta ---
  const ALL_35_LANGUAGES = [
    { code: "en", name: "English", flag: "🇺🇸", label: "English" },
    { code: "es", name: "Español", flag: "🇪🇸", label: "Español" },
    { code: "de", name: "Deutsch", flag: "🇩🇪", label: "Deutsch" },
    { code: "fr", name: "Français", flag: "🇫🇷", label: "Français" },
    { code: "it", name: "Italiano", flag: "🇮🇹", label: "Italiano" },
    { code: "pt", name: "Português", flag: "🇵🇹", label: "Português" },
    { code: "pl", name: "Polski", flag: "🇵🇱", label: "Polski" },
    { code: "vi", name: "Tiếng Việt", flag: "🇻🇳", label: "Tiếng Việt" },
    { code: "zh", name: "简体中文", flag: "🇨🇳", label: "简体中文" },
    { code: "ja", name: "日本語", flag: "🇯🇵", label: "日本語" },
    { code: "ko", name: "한국어", flag: "🇰🇷", label: "한국어" },
    { code: "nl", name: "Nederlands", flag: "🇳🇱", label: "Nederlands" },
    { code: "sv", name: "Svenska", flag: "🇸🇪", label: "Svenska" },
    { code: "da", name: "Dansk", flag: "🇩🇰", label: "Dansk" },
    { code: "no", name: "Norsk", flag: "🇳🇴", label: "Norsk" },
    { code: "tr", name: "Türkçe", flag: "🇹🇷", label: "Türkçe" },
    { code: "ru", name: "Русский", flag: "🇷🇺", label: "Русский" },
    { code: "ar", name: "العربية", flag: "🇸🇦", label: "العربية" },
    { code: "hi", name: "हिन्दी", flag: "🇮🇳", label: "हिन्दी" },
    { code: "id", name: "Bahasa Indonesia", flag: "🇮🇩", label: "Bahasa Indonesia" },
    { code: "th", name: "ไทย", flag: "🇹🇭", label: "ไทย" },
    { code: "cs", name: "Čeština", flag: "🇨🇿", label: "Čeština" },
    { code: "fi", name: "Suomi", flag: "🇫🇮", label: "Suomi" },
    { code: "el", name: "Ελληνικά", flag: "🇬🇷", label: "Ελληνικά" },
    { code: "ro", name: "Română", flag: "🇷🇴", label: "Română" },
    { code: "hu", name: "Magyar", flag: "🇭🇺", label: "Magyar" },
    { code: "uk", name: "Українська", flag: "🇺🇦", label: "Українська" },
    { code: "he", name: "עברית", flag: "🇮🇱", label: "עברית" },
    { code: "ms", name: "Bahasa Melayu", flag: "🇲🇾", label: "Bahasa Melayu" },
    { code: "tl", name: "Filipino", flag: "🇵🇭", label: "Filipino" },
    { code: "bn", name: "বাংলা", flag: "🇧🇩", label: "বাংলা" },
    { code: "sk", name: "Slovenčina", flag: "🇸🇰", label: "Slovenčina" },
    { code: "bg", name: "Български", flag: "🇧🇬", label: "Български" },
    { code: "hr", name: "Hrvatski", flag: "🇭🇷", label: "Hrvatski" },
    { code: "et", name: "Eesti", flag: "🇪🇪", label: "Eesti" }
  ];

  function getLocalizedUrl(targetLangCode) {
    const path = window.location.pathname;
    const segments = path.split("/").filter(Boolean);
    const nonEnCodes = ALL_35_LANGUAGES.filter((l) => l.code !== "en").map((l) => l.code);

    let remainingSegments = [...segments];
    if (segments.length > 0 && (nonEnCodes.includes(segments[0]) || segments[0] === "en")) {
      remainingSegments = segments.slice(1);
    }

    if (remainingSegments.length === 0) {
      return targetLangCode === "en" ? "/" : "/" + targetLangCode;
    }

    const firstSlug = remainingSegments[0];
    if (firstSlug === "tools") {
      return targetLangCode === "en" ? "/tools" : "/" + targetLangCode;
    }

    const staticPrefixes = ["about", "contact", "privacy-policy", "terms-and-conditions", "changelog", "blogs", "category"];
    if (staticPrefixes.includes(firstSlug)) {
      return targetLangCode === "en" ? path : "/" + targetLangCode;
    }

    return targetLangCode === "en" ? "/" + firstSlug : "/" + targetLangCode + "/" + firstSlug;
  }

  function getCurrentPageLanguage() {
    const htmlLang = document.documentElement.getAttribute("lang");
    if (htmlLang && ALL_35_LANGUAGES.some((l) => l.code === htmlLang)) {
      return htmlLang;
    }
    const pathParts = window.location.pathname.split("/").filter(Boolean);
    if (pathParts.length > 0 && ALL_35_LANGUAGES.some((l) => l.code === pathParts[0])) {
      return pathParts[0];
    }
    return "en";
  }

  function detectBrowserLanguage() {
    try {
      const candidates =
        navigator.languages && navigator.languages.length
          ? navigator.languages
          : [navigator.language || navigator.userLanguage || ""];
      for (let i = 0; i < candidates.length; i++) {
        const raw = (candidates[i] || "").toLowerCase().trim();
        if (!raw) continue;
        const code = raw.split("-")[0];
        const match = ALL_35_LANGUAGES.find((l) => l.code === code);
        if (match) return match;
      }
    } catch (e) {}
    return null;
  }

  function ensureLanguageModalDOM() {
    let modal = document.getElementById("langModalOverlay");
    if (modal) return modal;

    const currentLang = getCurrentPageLanguage();
    const currentLangObj = ALL_35_LANGUAGES.find((l) => l.code === currentLang) || ALL_35_LANGUAGES[0];

    const cardsHtml = ALL_35_LANGUAGES.map((l) => {
      const isCurrent = l.code === currentLang;
      return `<a class="lang-card ${isCurrent ? "active" : ""}" href="${getLocalizedUrl(l.code)}" data-lang-name="${l.name}" data-lang-code="${l.code}" data-lang-label="${l.label || l.name}" onclick="window.stwol.chooseLanguage('${l.code}')" role="listitem" aria-label="${l.name} (${l.code.toUpperCase()})">
        <span class="lang-flag" aria-hidden="true">${l.flag}</span>
        <div class="lang-info">
          <span class="lang-name">${l.name}</span>
          <span class="lang-code">${l.code.toUpperCase()}</span>
        </div>
        ${isCurrent ? '<span class="lang-current-badge">Active</span>' : ""}
      </a>`;
    }).join("");

    const wrapper = document.createElement("div");
    wrapper.innerHTML = `<div class="lang-modal-overlay" id="langModalOverlay" role="dialog" aria-modal="true" aria-labelledby="langModalTitle" aria-hidden="true">
      <div class="lang-modal-dialog" role="document">
        <button class="lang-modal-close" type="button" onclick="window.stwol.closeLanguagePopup()" aria-label="Close language selector" title="Close">&times;</button>
        <div class="lang-modal-header">
          <span class="lang-modal-icon" aria-hidden="true">🌐</span>
          <h2 class="lang-modal-title" id="langModalTitle">Choose Your Language</h2>
          <p class="lang-modal-subtitle">Select your preferred language. You can change this anytime from the menu.</p>
        </div>
        <div class="lang-suggest-banner" id="langSuggestBanner" role="region" aria-live="polite">
          <div class="lang-suggest-text">
            <span aria-hidden="true">💡</span>
            <span id="langSuggestMsg">Detected language available:</span>
          </div>
          <button type="button" class="lang-suggest-btn" id="langSuggestBtn">Switch Now &rarr;</button>
        </div>
        <div class="lang-modal-search-box">
          <label for="langSearchInput" class="sr-only">Search language</label>
          <input type="search" id="langSearchInput" class="lang-search-input" placeholder="🔍 Search language or country..." autocomplete="off" autocapitalize="none" spellcheck="false" oninput="window.stwol.filterLanguages(this.value)" />
        </div>
        <div class="lang-modal-grid" id="langModalGrid" role="list" aria-label="Available languages">${cardsHtml}</div>
        <div class="lang-modal-footer">
          <button class="lang-continue-btn" type="button" onclick="window.stwol.closeLanguagePopup()">Continue in ${currentLangObj.name} &rarr;</button>
        </div>
      </div>
    </div>`;

    modal = wrapper.firstElementChild;
    document.body.appendChild(modal);

    modal.addEventListener("click", (e) => {
      if (e.target === modal) closeLanguagePopup();
    });

    return modal;
  }

  function openLanguageModal() {
    const modal = ensureLanguageModalDOM();
    if (!modal) return;

    const cards = modal.querySelectorAll("#langModalGrid .lang-card");
    cards.forEach((card) => {
      const code = card.getAttribute("data-lang-code");
      if (code) {
        const existingHref = card.getAttribute("href");
        if (!existingHref || existingHref === "#") {
          const nextUrl = getLocalizedUrl(code);
          if (card.tagName === "A") card.setAttribute("href", nextUrl);
          else card.setAttribute("data-href", nextUrl);
        }
      }
    });

    const currentLang = getCurrentPageLanguage();
    const detected = detectBrowserLanguage();
    const banner = document.getElementById("langSuggestBanner");
    const msg = document.getElementById("langSuggestMsg");
    const btn = document.getElementById("langSuggestBtn");

    if (banner && msg && btn && detected && detected.code !== currentLang) {
      const matchingCard = modal.querySelector(`#langModalGrid .lang-card[data-lang-code="${detected.code}"]`);
      const targetHref = (matchingCard && matchingCard.getAttribute("href")) || getLocalizedUrl(detected.code);
      msg.innerHTML = `Detected language: <strong>${detected.flag} ${detected.name}</strong>`;
      btn.textContent = `Switch to ${detected.name} →`;
      if (btn.tagName === "A") btn.setAttribute("href", targetHref);
      btn.setAttribute("data-code", detected.code);
      btn.onclick = function () {
        navigateLanguage(detected.code, targetHref);
      };
      banner.classList.add("visible");
    } else if (banner) {
      banner.classList.remove("visible");
    }

    const search = document.getElementById("langSearchInput");
    if (search) {
      search.value = "";
      filterLanguages("");
    }

    if (document.activeElement && typeof document.activeElement.focus === "function") {
      lastFocusedElement = document.activeElement;
    }
    document.querySelectorAll(".lang-btn").forEach((b) => b.setAttribute("aria-expanded", "true"));

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-open");

    const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    if (!isTouch && search) {
      search.focus({ preventScroll: true });
    } else {
      const closeBtn = modal.querySelector(".lang-modal-close");
      if (closeBtn) closeBtn.focus({ preventScroll: true });
    }
  }

  // Never interrupt first-time visitors on landing (improves Core Web Vitals & AdSense UX)
  function initLanguagePopup() {
    return;
  }

  function closeLanguagePopup() {
    Storage.set("stwol_lang_seen", "1");
    document.querySelectorAll(".lang-btn").forEach((b) => b.setAttribute("aria-expanded", "false"));
    const modal = document.getElementById("langModalOverlay");
    const wasOpen = modal && modal.classList.contains("open");
    if (modal) {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("modal-open");
    if (wasOpen) restoreLastFocus();
  }

  function chooseLanguage(langCode) {
    if (!langCode) return;
    Storage.set("stwol_lang_seen", "1");
    Storage.set("stwol_pref_lang", langCode);
  }

  function navigateLanguage(langCode, url) {
    chooseLanguage(langCode);
    if (url) window.location.href = url;
  }

  function filterLanguages(query) {
    const term = (query || "").toLowerCase().trim();
    const cards = document.querySelectorAll("#langModalGrid .lang-card");
    cards.forEach((card) => {
      const name = (card.getAttribute("data-lang-name") || "").toLowerCase();
      const code = (card.getAttribute("data-lang-code") || "").toLowerCase();
      const label = (card.getAttribute("data-lang-label") || "").toLowerCase();
      if (!term || name.includes(term) || code.includes(term) || label.includes(term)) {
        card.classList.remove("hidden");
      } else {
        card.classList.add("hidden");
      }
    });
  }

  // --- GDPR / CCPA Cookie Consent Manager ---
  function initCookieConsent() {
    const banner = document.getElementById("cookieBanner");
    if (!banner) return;
    try {
      const consent = localStorage.getItem("stwol_consent");
      if (!consent) {
        banner.classList.add("visible");
      }
    } catch (e) {}
  }

  function setConsent(choice) {
    try {
      localStorage.setItem("stwol_consent", choice);
      const granted = choice === "all" ? "granted" : "denied";
      if (typeof window.gtag === "function") {
        window.gtag("consent", "update", {
          ad_storage: granted,
          ad_user_data: granted,
          ad_personalization: granted,
          analytics_storage: granted
        });
      }
      if (choice === "essential") {
        window.adsbygoogle = window.adsbygoogle || [];
        window.adsbygoogle.requestNonPersonalizedAds = 1;
      }
      const banner = document.getElementById("cookieBanner");
      if (banner) banner.classList.remove("visible");
    } catch (e) {}
  }

  // --- Theme Mode (Dark / Light) ---
  function toggleThemeMode() {
    const current = document.documentElement.getAttribute("data-theme") || "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("stwol_theme_mode", next);
    } catch (e) {}
    const btn = document.getElementById("themeModeBtn");
    if (btn) btn.innerHTML = next === "dark" ? "☀️" : "🌙";
  }

  // --- Mobile Navigation ---
  function initMobileNav() {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const mobileNav = document.getElementById("mobileNav");
    if (!hamburgerBtn || !mobileNav) return;

    let navOpen = false;
    function openNav() {
      navOpen = true;
      hamburgerBtn.classList.add("open");
      hamburgerBtn.setAttribute("aria-expanded", "true");
      mobileNav.classList.add("open");
      mobileNav.setAttribute("aria-hidden", "false");
    }
    function closeNav() {
      navOpen = false;
      hamburgerBtn.classList.remove("open");
      hamburgerBtn.setAttribute("aria-expanded", "false");
      mobileNav.classList.remove("open");
      mobileNav.setAttribute("aria-hidden", "true");
    }

    hamburgerBtn.addEventListener("click", () => (navOpen ? closeNav() : openNav()));
    document.addEventListener("click", (e) => {
      if (navOpen && !e.target.closest("header")) closeNav();
    });
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && navOpen) closeNav();
    });
    window.addEventListener("resize", () => {
      if (window.innerWidth > 900 && navOpen) closeNav();
    });
  }

  // --- Initialization ---
  document.addEventListener("DOMContentLoaded", () => {
    try {
      const savedMode = localStorage.getItem("stwol_theme_mode") || "light";
      document.documentElement.setAttribute("data-theme", savedMode);
      const btn = document.getElementById("themeModeBtn");
      if (btn) btn.innerHTML = savedMode === "dark" ? "☀️" : "🌙";

      const savedVol = localStorage.getItem("stwol_volume");
      if (savedVol) {
        currentVolume = parseFloat(savedVol);
        const slider = document.getElementById("volumeSlider");
        if (slider) slider.value = currentVolume;
      }
      const savedMute = localStorage.getItem("stwol_muted");
      if (savedMute === "1") {
        isMuted = true;
        const mBtn = document.getElementById("muteBtn");
        if (mBtn) mBtn.innerHTML = "🔇";
      }
      const savedTheme = localStorage.getItem("stwol_theme");
      if (savedTheme && THEMES[savedTheme]) {
        activeTheme = savedTheme;
        const themeSelect = document.getElementById("themeSelect");
        if (themeSelect) themeSelect.value = activeTheme;
      }
    } catch (e) {}

    loadFromStorage();
    resizeCanvas();
    renderEntries();
    initMobileNav();
    initCookieConsent();
    initLanguagePopup();
    renderSavedWheelsDropdown();

    if (canvas) {
      canvas.addEventListener("click", () => spinWheel());
    }

    window.addEventListener("resize", resizeCanvas);
    document.addEventListener("fullscreenchange", resizeCanvas);

    document.addEventListener("keydown", (e) => {
      const openModal = document.querySelector(".modal-overlay.open, .lang-modal-overlay.open");
      if (e.key === "Tab" && openModal) {
        const focusables = Array.from(
          openModal.querySelectorAll('a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])')
        ).filter((el) => el.offsetParent !== null);
        if (focusables.length) {
          const first = focusables[0];
          const last = focusables[focusables.length - 1];
          if (e.shiftKey && document.activeElement === first) {
            e.preventDefault();
            last.focus();
          } else if (!e.shiftKey && document.activeElement === last) {
            e.preventDefault();
            first.focus();
          }
        }
        return;
      }

      const interactiveTarget = e.target && e.target.closest
        ? e.target.closest("input, textarea, select, button, a, summary, [contenteditable='true'], [role='button'], [role='tab']")
        : null;
      if (e.key === " " && !interactiveTarget) {
        e.preventDefault();
        const modal = document.getElementById("resultModal");
        if (modal && modal.classList.contains("open")) {
          closeModal();
        } else if (spinning) {
          stopWheel();
        } else {
          spinWheel();
        }
      } else if (e.key === "Escape") {
        closeModal();
        closeLanguagePopup();
      }
    });

    ["resultModal", "qrModal", "embedModal"].forEach((id) => {
      const overlay = document.getElementById(id);
      if (overlay) {
        overlay.addEventListener("click", (e) => {
          if (e.target === overlay) closeModal();
        });
      }
    });

    const langModal = document.getElementById("langModalOverlay");
    if (langModal) {
      langModal.addEventListener("click", (e) => {
        if (e.target === langModal) closeLanguagePopup();
      });
    }

    document.addEventListener("click", initAudio, { once: true });
    document.addEventListener("touchstart", initAudio, { once: true });

    if ("serviceWorker" in navigator && (window.location.protocol === "https:" || window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1")) {
      window.addEventListener("load", () => {
        navigator.serviceWorker.register("/sw.js").catch(() => {});
      });
    }
  });

  window.stwol = {
    spinWheel,
    stopWheel,
    addEntry,
    removeEntry,
    adjustWeight,
    clearAllEntries,
    resetDefaultEntries,
    shuffleEntries,
    sortEntries,
    toggleBulk,
    addBulkEntries,
    loadPreset,
    setTheme,
    setVolume,
    toggleMute,
    toggleFullscreen,
    shareWheel,
    openQRModal,
    openEmbedModal,
    updateEmbedCode,
    copyEmbedCode,
    copyWinnerResult,
    saveCurrentWheel,
    loadSelectedSavedWheel,
    clearHistory,
    exportHistoryCSV,
    closeModal,
    removeWinnerAndClose,
    setConsent,
    toggleThemeMode,
    openLanguageModal,
    closeLanguagePopup,
    chooseLanguage,
    navigateLanguage,
    filterLanguages,
    generateQRMatrix
  };
})();
