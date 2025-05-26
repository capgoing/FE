import { KJUR } from "jsrsasign";

const SERVICE_ACCOUNT_EMAIL = import.meta.env.VITE_GOOGLE_API_ACCOUNT_EMAIL;
const PRIVATE_KEY = import.meta.env.VITE_GOOGLE_API_PRIVATE_KEY.replaceAll("\\n", "\n");
const SCOPES = "https://www.googleapis.com/auth/cloud-platform";

export async function getAccessToken() {
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: SERVICE_ACCOUNT_EMAIL,
    scope: SCOPES,
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };

  const jwt = KJUR.jws.JWS.sign("RS256", JSON.stringify(header), JSON.stringify(payload), PRIVATE_KEY);

  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      grant_type: "urn:ietf:params:oauth:grant-type:jwt-bearer",
      assertion: jwt,
    }),
  });

  const data = await res.json();
  return data.access_token;
}

let currentAudio = null;

export async function speak(text) {
  try {
    stop();

    const token = await getAccessToken();

    const body = {
      input: { text },
      voice: { languageCode: "ko-KR", name: "ko-KR-Wavenet-C" },
      audioConfig: { audioEncoding: "MP3", speakingRate: 0.95 },
    };

    const res = await fetch("https://texttospeech.googleapis.com/v1/text:synthesize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    const { audioContent } = await res.json();

    if (!audioContent) return;

    const audio = new Audio(`data:audio/mp3;base64,${audioContent}`);
    currentAudio = audio;
    audio.play();
  } catch (err) {
    console.error("TTS 오류:", err);
  }
}

export function stop() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}
