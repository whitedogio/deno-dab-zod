import { GetAppMetadataRequest, GetAppMetadataResponse } from "./get_app_metadata.ts";

Deno.test("agent-A -> DAB", () => {
  GetAppMetadataRequest.parse({
    "type": "getAppMetadataRequest",
    "payload": {
      "app": { "appId": "myApp@my.appd.com", "desktopAgent": "agent-B" },
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
  GetAppMetadataRequest.parse({
    "type": "getAppMetadataRequest",
    "payload": {
      "app": { "appId": "myApp@my.appd.com", "desktopAgent": "agent-B" },
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

Deno.test("agent-B -> DAB", () => {
  GetAppMetadataResponse.parse({
    "type": "getAppMetadataResponse",
    "payload": {
      "appMetadata": {
        "appId": "myApp@my.appd.com",
        "name": "myApp",
        "version": "1.0",
        "title": "My example application",
        "tooltip": " A tooltip for the application that can be used to render UI elements.",
        "description": "A longer, multi-paragraph description for the application that could include mark-up.",
        "icons": [],
        "screenshots": [],
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
  GetAppMetadataResponse.parse({
    "type": "getAppMetadataResponse",
    "payload": {
      "appMetadata": {
        "appId": "myApp@my.appd.com",
        "name": "myApp",
        "version": "1.0",
        "title": "My example application",
        "tooltip": " A tooltip for the application that can be used to render UI elements.",
        "description": "A longer, multi-paragraph description for the application that could include mark-up.",
        "icons": [],
        "screenshots": [],
        "desktopAgent": "agent-B", //added by DAB
      },
    },
    "meta": {
      "requestGuid": "99c3a032-ad75-4193-8d65-7801a31f22a4",
      "responseGuid": "c6a0ea28-4468-4ba9-b32c-33025a064515",
      "timestamp": "2023-05-22T18:29:01.934Z",
      "sources": [ //added by DAB
        { "desktopAgent": "agent-B" },
      ],
    },
  });
});
