import { z } from "zod";
import { Context } from "./context.ts";
import { ImplementationMetadata } from "./implementation_metadata.ts";
import { Metadata, RequestMetadata } from "./metadata.ts";

export const Hello = z
  .object({
    type: z.literal("hello"),
    payload: z
      .object({
        authRequired: z
          .boolean()
          .describe(
            "A flag indicating whether the Desktop Agent Bridge requires authentication or not.",
          ),
        authToken: z
          .string()
          .optional()
          .describe(
            "An optional Desktop Agent Bridge JWT authentication token if the Desktop Agent wants to authenticate a bridge.",
          ),
        desktopAgentBridgeVersion: z
          .string()
          .describe("The version of the Bridge"),
        supportedFDC3Versions: z
          .string()
          .array()
          .describe("The FDC3 versions supported by the Bridge"),
      })
      .strict(),
    meta: Metadata
      .pick({ timestamp: true })
      .strict(),
  })
  .strict();

export const Handshake = z
  .object({
    type: z.literal("handshake"),
    payload: z
      .object({
        authToken: z
          .string()
          .optional()
          // FIXME: needs description
          .describe(""),
        channelsState: z
          .record(Context.array())
          .describe(
            "The current state of the Desktop Agent's channels, excluding any private channels, as a mapping of channel id to an array of Context objects, most recent first.",
          ),
        implementationMetadata: ImplementationMetadata
          .describe(
            "DesktopAgent implementationMetadata trying to connect to the bridge.",
          ),
        requestedName: z
          .string()
          .describe("The requested Desktop Agent name"),
      })
      .strict(),
    meta: RequestMetadata,
  })
  .strict();
