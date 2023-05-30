import { Context } from "./context.ts";

Deno.test("empty context", () => {
  Context.parse({ type: "fdc3.nothing" });
});
