import { EmmettError } from "@event-driven-io/emmett";
import { addProductItem, cancelShoppingCart, confirmShoppingCart, removeProductItem } from "./command-handlers.ts";
import type { ShoppingCartCommand } from "./command.ts";
import type { ShoppingCartEvent } from "./event.ts";
import type { ShoppingCart } from "./state.ts";

export function decide(command: ShoppingCartCommand, state: ShoppingCart): ShoppingCartEvent {
  const { type } = command;
  switch (type) {
    case "AddProductItemToShoppingCart":
      return addProductItem(command, state);
    case "RemoveProductItemFromShoppingCart":
      return removeProductItem(command, state);
    case "ConfirmShoppingCart":
      return confirmShoppingCart(command, state);
    case "CancelShoppingCart":
      return cancelShoppingCart(command, state);
    default: {
      const _notExistingCommandType: never = type;
      throw new EmmettError(`Unknown command type`);
    }
  }
}
