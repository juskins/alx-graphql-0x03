import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
};


export default withSentryConfig(nextConfig, {
  org: "example-org",
  project: "example-project",
  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,
});

