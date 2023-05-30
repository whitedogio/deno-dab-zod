import { z } from "zod";
import { AppIdentifier } from "./app_identifier.ts";
import { AppMetadata } from "./app_metadata.ts";
import { RequestMetadata, ResponseMetadata } from "./metadata.ts";
import { Source } from "./source.ts";

export const GetAppMetadataRequest = z.object({
  type: z.literal("getAppMetadataRequest"),
  payload: z.object({
    app: AppIdentifier,
  }),
  meta: RequestMetadata
    .extend({ source: Source })
    .strict(),
});

export const GetAppMetadataResponse = z.object({
  type: z.literal("getAppMetadataResponse"),
  payload: z.object({
    appMetadata: AppMetadata
      .strict()
      .optional(),
  }),
  meta: ResponseMetadata,
});
