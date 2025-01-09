import { withSentryConfig } from "@sentry/nextjs";

const nextConfig = {
  /* config options here */
};

// Make sure adding Sentry options is the last code to run before exporting
export default withSentryConfig(nextConfig, {
  org: "ahsan-kabir-ye",
  project: "computer-repairshop",

  // An auth token is required for uploading source maps.
  authToken: process.env.SENTRY_AUTH_TOKEN,

  silent: false, // Can be used to suppress logs

  hideSourceMaps: true, // Can be used to remove the uploaded source maps

  disableLogger: true, // Can be used to disable the Sentry CLI logs
});
