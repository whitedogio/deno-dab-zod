import { z } from "zod";
import { AppIdentifier } from "./app_identifier.ts";
import { RequestMetadata, ResponseMetadata } from "./metadata.ts";
import { Source } from "./source.ts";

export const FindInstancesRequest = z
  .object({
    type: z.literal("findInstancesRequest"),
    payload: z
      .object({
        app: AppIdentifier
          .omit({ instanceId: true })
          .merge(z.object({ desktopAgent: z.string().optional() }))
          .strict(),
      })
      .strict(),
    meta: RequestMetadata
      .extend({
        source: Source,
      })
      .strict(),
  })
  .strict();

export const FindInstancesResponse = z.object({
  type: z.literal("findInstancesResponse"),
  payload: z
    .object({
      appIdentifiers: AppIdentifier
        .strict()
        .array()
        .optional(),
    })
    .strict(),
  meta: ResponseMetadata,
});
