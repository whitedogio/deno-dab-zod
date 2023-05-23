import { z } from "zod";
import { Context } from "./context.ts";
import { RequestMetadata } from "./metadata.ts";

export const BroadcastRequest = z.object({
  type: z.literal("broadcastRequest"),
  payload: z.object({
    channel: z.string(),
    context: Context,
  }),
  meta: RequestMetadata,
});
