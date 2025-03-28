type EmptyShoppingCart = {
  status: "empty";
};

type OpenedShoppingCart = {
  status: "opened";
  productItems: ProductItemMap;
};

type ClosedShoppingCart = {
  status: "closed";
};

export type ShoppingCart = EmptyShoppingCart | OpenedShoppingCart | ClosedShoppingCart;
export type ProductItemMap = Map<string, number>;
