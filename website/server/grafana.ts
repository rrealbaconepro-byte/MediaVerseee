
import axios from "axios";

const LOKI_ENDPOINT = process.env.GRAFANA_PUSH_URL;
const LOKI_USERNAME = process.env.GRAFANA_USERNAME;
const LOKI_PASSWORD = process.env.GRAFANA_PASSWORD;

const lokiEnabled =
  process.env.NODE_ENV === "production" &&
  Boolean(LOKI_ENDPOINT && LOKI_USERNAME && LOKI_PASSWORD);

if (process.env.NODE_ENV === "production" && !lokiEnabled) {
  console.warn(
    "Loki logging is disabled: GRAFANA_PUSH_URL, GRAFANA_USERNAME, or GRAFANA_PASSWORD is missing."
  );
}

export const pushLogsToLoki = async (
  stream: { [key: string]: string },
  messages: string[]
) => {
  if (!lokiEnabled) return;

  const values = messages.map((message) => [
    String(Date.now() * 1000000),
    message,
  ]);

  const logs = {
    streams: [{ stream, values }],
  };

  try {
    const response = await axios.post(LOKI_ENDPOINT!, logs, {
      auth: {
        username: LOKI_USERNAME!,
        password: LOKI_PASSWORD!,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });

    console.log(`Successfully pushed logs to Loki: ${response.status}`);
  } catch (error: any) {
    console.error("Failed to push logs to Loki:", error.message);
  }
};
