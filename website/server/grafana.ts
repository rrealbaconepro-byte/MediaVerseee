if (
  process.env.NODE_ENV === "production" &&
  (!LOKI_ENDPOINT || !LOKI_USERNAME || !LOKI_PASSWORD)
) {
  console.warn(
    "Loki logging is disabled: GRAFANA_PUSH_URL, GRAFANA_USERNAME, or GRAFANA_PASSWORD is missing."
  );
}
