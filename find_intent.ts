import { z } from "zod";
import { AppIntent } from "./app_intent.ts";
import { Context } from "./context.ts";
import { RequestMetadata, ResponseMetadata } from "./metadata.ts";
import { Source } from "./source.ts";

export const FindIntentRequest = z.object({
  type: z.literal("findIntentRequest"),
  payload: z.object({
    intent: z.string(),
    context: Context.optional(),
  }),
  meta: RequestMetadata
    .extend({ source: Source })
    .strict(),
});

export const FindIntentResponse = z.object({
  type: z.literal("findIntentResponse"),
  payload: z.object({
    appIntent: AppIntent,
  }),
  meta: ResponseMetadata,
});
