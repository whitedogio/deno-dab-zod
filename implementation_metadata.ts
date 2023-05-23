import { z } from "zod";

export const ImplementationMetadata = z
  .object({
    fdc3Version: z.string(),
    optionalFeatures: z.object({
      DesktopAgentBridging: z.boolean().optional(),
      OriginatingAppMetadata: z.boolean(),
      UserChannelMembershipAPIs: z.boolean(),
    }),
    provider: z.string(),
    providerVersion: z.string().optional(),
  })
  .strict();

export const DesktopAgentMetadata = ImplementationMetadata
  .extend({
    desktopAgent: z.string(),
  })
  .strict();
