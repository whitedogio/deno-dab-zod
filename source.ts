import { z } from "zod";

export const Source = z
  .object({
    appId: z.string(),
    instanceId: z.string().optional(),
    desktopAgent: z.string().optional(),
  })
  .strict();

export const BridgeSource = z
  .object({
    appId: z.string(),
    instanceId: z.string().optional(),
    desktopAgent: z.string(),
  })
  .strict();
