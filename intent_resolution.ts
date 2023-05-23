import { z } from "zod";
import { Source } from "./source.ts";

export const IntentResolution = z
  .object({
    intent: z.string(),
    source: Source,
  })
  .strict();
