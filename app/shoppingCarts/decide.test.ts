import { EmmettError } from "@event-driven-io/emmett";
import { assertThrows } from "@std/assert";
import { describe, it } from "@std/testing/bdd";
import { assertSpyCalls, spy } from "@std/testing/mock";
import type {
  AddProductItemToShoppingCart,
  CancelShoppingCart,
  ConfirmShoppingCart,
  RemoveProductItemFromShoppingCart,
  ShoppingCartCommand,
} from "./command.ts";
import { CommandHandlers, createDecide } from "./decide.ts";
import type { EmptyShoppingCart } from "./state.ts";

describe("decide.ts#decide", () => {
  const addProductItemSpy = spy();
  const removeProductItemSpy = spy();
  const confirmShoppingCartSpy = spy();
  const cancelShoppingCartSpy = spy();
  const decide = createDecide(
    {
      addProductItem: addProductItemSpy,
      removeProductItem: removeProductItemSpy,
      confirmShoppingCart: confirmShoppingCartSpy,
      cancelShoppingCart: cancelShoppingCartSpy,
    } as unknown as CommandHandlers,
  );

  describe("when handling an AddProductItemToShoppingCart command", () => {
    it("should call the addProductItem command handler", () => {
      const command = { type: "AddProductItemToShoppingCart" } as AddProductItemToShoppingCart;
      const state = { status: "empty" } as EmptyShoppingCart;
      decide(command, state);
      assertSpyCalls(addProductItemSpy, 1);
    });
  });

  describe("when handling an RemoveProductItemFromShoppingCart command", () => {
    it("should call the removeProductItem command handler", () => {
      const command = { type: "RemoveProductItemFromShoppingCart" } as RemoveProductItemFromShoppingCart;
      const state = { status: "empty" } as EmptyShoppingCart;
      decide(command, state);
      assertSpyCalls(removeProductItemSpy, 1);
    });
  });

  describe("when handling an ConfirmShoppingCart command", () => {
    it("should call the confirmShoppingCart command handler", () => {
      const command = { type: "ConfirmShoppingCart" } as ConfirmShoppingCart;
      const state = { status: "empty" } as EmptyShoppingCart;
      decide(command, state);
      assertSpyCalls(confirmShoppingCartSpy, 1);
    });
  });

  describe("when handling an CancelShoppingCart command", () => {
    it("should call the cancelShoppingCart command handler", () => {
      const command = { type: "CancelShoppingCart" } as CancelShoppingCart;
      const state = { status: "empty" } as EmptyShoppingCart;
      decide(command, state);
      assertSpyCalls(cancelShoppingCartSpy, 1);
    });
  });

  describe("when handling an unknown command", () => {
    it("should throw an error", () => {
      const command = { type: "UnknownCommand" } as unknown;
      const state = { status: "empty" } as EmptyShoppingCart;
      assertThrows(() => decide(command as ShoppingCartCommand, state), EmmettError);
    });
  });
});
