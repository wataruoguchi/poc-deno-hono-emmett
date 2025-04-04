import { assertEquals } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { initialState } from "./service.ts";

describe("shoppingCarts service", () => {
  it("should be able to add a product item to the shopping cart", () => {
    const state = initialState();
    assertEquals(state, { status: "empty" });
  });
});
