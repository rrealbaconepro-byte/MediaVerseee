const LOKI_ENDPOINT = process.env.LOKI_ENDPOINT;
const LOKI_USERNAME = process.env.LOKI_USERNAME;
const LOKI_PASSWORD = process.env.LOKI_PASSWORD;

const lokiEnabled =
  Boolean(LOKI_ENDPOINT) &&
  Boolean(LOKI_USERNAME) &&
  Boolean(LOKI_PASSWORD);

export async function pushLogsToLoki(logs: unknown[]) {
  // Loki is disabled unless all required settings are configured.
  if (!lokiEnabled) {
    return;
  }

  // Keep your existing Loki request code below this point.
  // Example:
  //
  // await axios.post(LOKI_ENDPOINT, ...);
}
