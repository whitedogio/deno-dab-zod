import { BroadcastRequest } from "./broadcast.ts";

Deno.test("agent-A -> DAB", () => {
  BroadcastRequest.parse({
    "type": "broadcastRequest",
    "payload": {
      "channel": "myChannel",
      "context": { type: "fdc3.nothing" },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "timestamp": "2023-05-22T18:29:01.934Z",
      // FIXME: examples have source as array
      "source": {
        "appId": "agentA-app1",
        "instanceId": "c6ad5174-6f78-4582-8e96-728d93a4d7d7",
      },
    },
  });
});

Deno.test("DAB -> agent-B", () => {
  BroadcastRequest.parse({
    "type": "broadcastRequest",
    "payload": {
      "channel": "myChannel",
      "context": { type: "fdc3.nothing" },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "timestamp": "2023-05-22T18:29:01.934Z",
      // FIXME: examples have source as array
      "source": {
        "appId": "agentA-app1",
        "instanceId": "c6ad5174-6f78-4582-8e96-728d93a4d7d7",
        "desktopAgent": "agent-A",
      },
    },
  });
});
