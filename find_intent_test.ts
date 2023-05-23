import { FindIntentRequest, FindIntentResponse } from "./find_intent.ts";

Deno.test("agent-A -> DAB", () => {
  FindIntentRequest.parse({
    "type": "findIntentRequest",
    "payload": {
      "intent": "StartChat",
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
  FindIntentRequest.parse({
    "type": "findIntentRequest",
    "payload": {
      "intent": "StartChat",
      "context": { type: "fdc3.nothing" },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "timestamp": "2023-05-22T18:29:01.934Z",
      "source": {
        "appId": "agentA-app1",
        "instanceId": "c6ad5174-6f78-4582-8e96-728d93a4d7d7",
        "desktopAgent": "agent-A",
      },
    },
  });
});

Deno.test("agent-B -> DAB", () => {
  FindIntentResponse.parse({
    "type": "findIntentResponse",
    "payload": {
      "appIntent": {
        "intent": { "name": "StartChat" },
        "apps": [
          { "appId": "Skype", "title": "Skype" /* other AppMetadata fields may be included */ },
          { "appId": "Symphony", "title": "Symphony" },
          { "appId": "Symphony", "instanceId": "93d2fe3e-a66c-41e1-b80b-246b87120859", "title": "Symphony" },
          { "appId": "Slack", "title": "Slack" },
        ],
      },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "responseGuid": "c6a0ea28-4468-4ba9-b32c-33025a064515",
      "timestamp": "2023-05-22T18:29:01.934Z",
    },
  });
});

Deno.test("DAB -> agent-A", () => {
  FindIntentResponse.parse({
    "type": "findIntentResponse",
    "payload": {
      "intent": "StartChat",
      "appIntent": {
        "intent": { "name": "StartChat" },
        "apps": [
          { "appId": "Skype", "title": "Skype", "desktopAgent": "agent-B" }, //desktopAgent added by DAB
          { "appId": "Symphony", "title": "Symphony", "desktopAgent": "agent-B" },
          {
            "appId": "Symphony",
            "instanceId": "93d2fe3e-a66c-41e1-b80b-246b87120859",
            "title": "Symphony",
            "desktopAgent": "agent-B",
          },
          { "appId": "Slack", "title": "Slack", "desktopAgent": "agent-B" },
          { "appId": "WebIce", "desktopAgent": "agent-C" },
        ],
      },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "responseGuid": "c6a0ea28-4468-4ba9-b32c-33025a064515",
      "timestamp": "2023-05-22T18:29:01.934Z",
      "sources": [ //added by DAB
        { "desktopAgent": "agent-A" },
        { "desktopAgent": "agent-B" },
      ],
    },
  });
});
