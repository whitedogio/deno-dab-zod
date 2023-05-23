import { assert, assertFalse } from "$/testing/asserts.ts";
import { parseJSON } from "./mod.ts";

Deno.test("valid hello message", () => {
  assert(
    parseJSON(JSON.stringify({
      type: "hello",
      payload: {
        desktopAgentBridgeVersion: "0.1.0",
        supportedFDC3Versions: ["2.0"],
        authRequired: false,
      },
      meta: {
        timestamp: new Date(),
      },
    })).success,
  );
});

Deno.test("invalid hello message", () => {
  assertFalse(
    parseJSON(JSON.stringify({
      type: "hello",
      payload: {
        desktopAgentBridgeVersion2: "0.1.0",
        supportedFDC3Versions: ["2.0"],
        authRequired: false,
      },
      meta: {
        timestamp: new Date(),
      },
    })).success,
  );
});
