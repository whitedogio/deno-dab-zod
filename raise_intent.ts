import { z } from "zod";
import { AppIdentifier } from "./app_identifier.ts";
import { Channel } from "./channel.ts";
import { Context } from "./context.ts";
import { RequestMetadata, ResponseMetadata } from "./metadata.ts";
import { Source } from "./source.ts";

export const RaiseIntentRequest = z
  .object({
    type: z.literal("raiseIntentRequest"),
    payload: z
      .object({
        intent: z.string(),
        context: Context,
        app: AppIdentifier,
      })
      .strict(),
    meta: RequestMetadata
      .extend({
        source: Source,
        destination: Source
          .extend({ desktopAgent: z.string() })
          .strict(),
      })
      .strict(),
  })
  .strict();

export const RaiseIntentResponse = z.object({
  type: z.literal("raiseIntentResponse"),
  payload: z.object({
    intentResolution: z
      .object({
        intent: z.string(),
        source: Source,
      })
      .strict()
      .optional(),
  })
    .strict(),
  meta: ResponseMetadata,
});

const ContextOrChannel = z.intersection(
  z.object({
    context: Context.optional(),
    channel: Channel.optional(),
  }),
  z.union([
    z.object({ context: Context, channel: z.undefined() }).strict(),
    z.object({ context: z.undefined(), channel: Channel }).strict(),
  ]),
);

export const RaiseIntentResultResponse = z.object({
  type: z.literal("raiseIntentResultResponse"),
  payload: ContextOrChannel,
  meta: ResponseMetadata,
});
