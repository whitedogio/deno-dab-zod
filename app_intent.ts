import { z } from "zod";
import { AppMetadata } from "./app_metadata.ts";
import { IntentMetadata } from "./intent_metadata.ts";

export const AppIntent = z.object({
  intent: IntentMetadata
    .describe(
      "Details of the intent whose relationship to resolving applications is being described.",
    ),
  apps: AppMetadata
    .array()
    .describe("Details of applications that can resolve the intent."),
});
