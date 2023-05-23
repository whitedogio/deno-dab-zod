import { z } from "zod";

export const IntentMetadata = z.object({
  name: z.string(),
  displayName: z.string().optional(),
});
