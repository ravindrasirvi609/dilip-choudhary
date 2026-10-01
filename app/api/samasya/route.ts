const MOBILE_REGEX = /^[6-9]\d{9}$/;

type LeadPayload = {
  name: string;
  village: string;
  mobile: string;
  problem: string;
};

function jsonResponse(body: unknown, status: number) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return jsonResponse({ ok: false, error: "अमान्य डेटा।" }, 400);
  }

  const { name, village, mobile, problem } = (body ?? {}) as Record<string, unknown>;

  if (typeof name !== "string" || !name.trim()) {
    return jsonResponse({ ok: false, error: "कृपया अपना नाम दर्ज करें।" }, 400);
  }
  if (typeof village !== "string" || !village.trim()) {
    return jsonResponse({ ok: false, error: "कृपया अपने गाँव का नाम चुनें।" }, 400);
  }
  if (typeof mobile !== "string" || !MOBILE_REGEX.test(mobile)) {
    return jsonResponse(
      { ok: false, error: "कृपया सही 10 अंकों का मोबाइल नंबर दर्ज करें।" },
      400
    );
  }

  const lead: LeadPayload = {
    name: name.trim(),
    village: village.trim(),
    mobile,
    problem: typeof problem === "string" ? problem.trim() : "",
  };

  const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;
  if (!webhookUrl) {
    console.error("GOOGLE_SHEET_WEBHOOK_URL env var is not set. See docs/google-sheets-setup.md.");
    return jsonResponse(
      { ok: false, error: "सर्वर सेटअप अधूरा है। कृपया बाद में प्रयास करें।" },
      500
    );
  }

  try {
    const sheetResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        timestamp: new Date().toISOString(),
        ...lead,
      }),
    });

    if (!sheetResponse.ok) {
      throw new Error(`Sheet webhook responded with status ${sheetResponse.status}`);
    }
  } catch (error) {
    console.error("Failed to forward lead to Google Sheet webhook:", error);
    return jsonResponse(
      { ok: false, error: "जानकारी सेव नहीं हो पाई। कृपया दोबारा प्रयास करें।" },
      502
    );
  }

  return jsonResponse({ ok: true }, 200);
}
