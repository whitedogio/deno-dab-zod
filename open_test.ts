import { OpenRequest } from "./open.ts";

Deno.test("agent-A -> DAB", () => {
  OpenRequest.parse({
    "type": "openRequest",
    "payload": {
      "app": {
        "appId": "myApp",
        "desktopAgent": "agent-B",
      },
      "context": {
        "type": "fdc3.nothing",
      },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "timestamp": "2023-05-22T18:29:01.934Z",
      "source": {
        "appId": "AChatApp",
        "instanceId": "02e575aa-4c3a-4b66-acad-155073be21f6",
      },
    },
  });
});

Deno.test("DAB -> agent-B", () => {
  OpenRequest.parse({
    "type": "openRequest",
    "payload": {
      "app": {
        "appId": "myApp",
        "desktopAgent": "DesktopAgentB",
      },
      "context": {
        "type": "fdc3.nothing",
      },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "timestamp": "2023-05-22T18:29:01.934Z",
      "source": {
        "appId": "AChatApp",
        "instanceId": "02e575aa-4c3a-4b66-acad-155073be21f6",
        "desktopAgent": "agent-A", //added by DAB
      },
    },
  });
});
