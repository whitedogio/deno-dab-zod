import { z } from "zod";
import { Source } from "./source.ts";

export const Metadata = z
  .object({
    timestamp: z
      .string()
      .datetime()
      .describe("Timestamp at which request or response was generated"),
    requestGuid: z
      .string()
      .uuid()
      .optional()
      .describe("Unique GUID for the request"),
    responseGuid: z
      .string()
      .uuid()
      .optional()
      .describe("Unique GUID for the response"),
  })
  .strict();

export const RequestMetadata = Metadata
  .extend({
    requestGuid: z
      .string()
      .uuid()
      .describe("Unique GUID for the request"),
    source: Source.optional(),
  })
  .strict();

export const ResponseMetadata = RequestMetadata
  .extend({
    responseGuid: z
      .string()
      .uuid()
      .describe("Unique GUID for the response"),
    // source: Source.optional(),
    errorDetails: z
      .string()
      .array()
      .optional(),
    errorSources: z
      .object({ desktopAgent: z.string() })
      .array()
      .optional(),
    sources: z
      .object({ desktopAgent: z.string() })
      .array()
      .optional(),
  })
  .strict();
