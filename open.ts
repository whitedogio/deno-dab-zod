import { z } from "zod";
import { AppIdentifier } from "./app_identifier.ts";
import { RequestMetadata, ResponseMetadata } from "./metadata.ts";
import { BridgeSource, Source } from "./source.ts";
import { Context } from "./context.ts";

export const OpenRequest = z
  .object({
    type: z.literal("openRequest"),
    payload: z
      .object({
        app: AppIdentifier
          .omit({ instanceId: true })
          .strict(),
        context: Context
          .optional(),
      })
      .strict(),
    meta: RequestMetadata
      // FIXME: should have destination
      .extend({
        source: Source.omit({ desktopAgent: true }),
      })
      .strict(),
  })
  .strict();

export const OpenBridgeRequest = OpenRequest
  .extend({
    meta: RequestMetadata
      .extend({
        source: BridgeSource,
      }).strict(),
  })
  .strict();

export const OpenResponse = z.object({
  type: z.literal("openResponse"),
  payload: z
    .object({
      appIdentifier: AppIdentifier
        .strict()
        .optional(),
    })
    .strict(),
  meta: ResponseMetadata,
});
