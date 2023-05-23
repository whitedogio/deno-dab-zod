import { z } from "zod";
import { Context } from "./context.ts";
import { DesktopAgentMetadata } from "./implementation_metadata.ts";
import { Metadata } from "./metadata.ts";

export const ConnectedAgentsUpdate = z.object({
  type: z.literal("connectedAgentsUpdate"),
  payload: z.object({
    addAgent: z
      .string()
      .optional()
      .describe(
        "Should be set when an agent first connects to the bridge and provide its assigned name.",
      ),
    removeAgent: z
      .string()
      .optional()
      .describe(
        "Should be set when an agent disconnects from the bridge and provide the name that no longer is assigned.",
      ),
    allAgents: DesktopAgentMetadata
      .array()
      .describe(
        "Desktop Agent Bridge implementation metadata of all connected agents.",
      ),
    channelsState: z
      .record(Context.array())
      .optional()
      .describe(
        "The updated state of channels that should be adopted by the agents. Should only be set when an agent is connecting to the bridge.",
      ),
  }),
  meta: Metadata.pick({
    requestGuid: true,
    responseGuid: true,
    timestamp: true,
  }),
});
