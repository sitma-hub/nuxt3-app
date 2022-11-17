import { describe, it, expect } from "vitest";
import { setup, $fetch } from "@nuxt/test-utils-edge";
describe("ssr", async () => {
  await setup({});
  it("renders the index page", async () => {
    // Get response to a server-rendered page with `$fetch`.
    const html = await $fetch("/");
    expect(html).toContain("<a>Test</a>");
  });
});
