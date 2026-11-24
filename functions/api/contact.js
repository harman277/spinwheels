/**
 * Cloudflare Pages Edge Function: POST /api/contact
 * Zero cold-start contact endpoint matching existing client form behavior.
 * Optional env var in Cloudflare Pages dashboard: CONTACT_WEBHOOK_URL
 */

export async function onRequestPost(context) {
  const { request, env } = context;

  let body = {};
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ success: false, error: "Invalid JSON payload." }, 400);
  }

  const cleanName = typeof body.name === "string" ? body.name.trim().slice(0, 120) : "";
  const cleanEmail = typeof body.email === "string" ? body.email.trim().slice(0, 160) : "";
  const cleanSubject = typeof body.subject === "string" ? body.subject.trim().slice(0, 200) : "General Inquiry";
  const cleanMessage = typeof body.message === "string" ? body.message.trim().slice(0, 2000) : "";
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(cleanEmail);

  if (!cleanName || !validEmail || !cleanMessage) {
    return jsonResponse(
      { success: false, error: "Please provide a valid name, email address, and message." },
      400
    );
  }

  let delivered = false;
  const webhookUrl = env && env.CONTACT_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      const hookRes = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: cleanName,
          email: cleanEmail,
          subject: cleanSubject,
          message: cleanMessage,
          source: "https://spinthewheelsonline.com",
          submittedAt: new Date().toISOString()
        })
      });
      delivered = hookRes.ok;
    } catch (err) {
      console.error("[Contact API] Webhook failed:", err && err.message);
    }
  }

  const responseMessage = delivered
    ? "Thank you for reaching out! Your inquiry has been forwarded to our support desk (typical response: 24–48 business hours)."
    : "Your message was received locally, and because an automated email relay is not configured yet, please click 'Send via Email App' or email spinthewheelsonline@gmail.com directly so we don't miss it.";

  return jsonResponse({
    success: true,
    delivered,
    mailtoFallback: !delivered,
    message: responseMessage
  });
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}
