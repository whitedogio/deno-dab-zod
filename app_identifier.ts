import { z } from "zod";

export const AppIdentifier = z
  .object({
    appId: z
      .string()
      .describe(""),
    instanceId: z
      .string()
      .optional()
      .describe(""),
    desktopAgent: z
      .string(),
  })
  .strict();
