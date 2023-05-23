import { z } from "zod";
import { AppIntent } from "./app_intent.ts";
import { Context } from "./context.ts";
import { RequestMetadata, ResponseMetadata } from "./metadata.ts";
import { Source } from "./source.ts";

export const FindIntentsByContextRequest = z.object({
  type: z.literal("findIntentsByContextRequest"),
  payload: z.object({
    context: Context,
  }),
  meta: RequestMetadata
    .extend({ source: Source })
    .strict(),
});

export const FindIntentsByContextResponse = z.object({
  type: z.literal("findIntentsByContextResponse"),
  payload: z.object({
    appIntents: AppIntent.array(),
  }),
  meta: ResponseMetadata,
});
