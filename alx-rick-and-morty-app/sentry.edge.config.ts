import * as Sentry from "@sentry/nextjs";
Sentry.init({
   dsn: "https://examplePublicKey@o0.ingest.sentry.io/0",
   // Adds request headers and IP for users
   sendDefaultPii: true,
   // Capture 100% in dev, 10% in production
   // Adjust based on your traffic volume
   tracesSampleRate: process.env.NODE_ENV === "development" ? 1.0 : 0.1,
   // Enable logs to be sent to Sentry
   enableLogs: true,
});