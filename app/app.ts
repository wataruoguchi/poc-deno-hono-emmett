import { type Context, Hono } from "hono";
import { shoppingCartsApi } from "./shoppingCarts/api.ts";

const app = new Hono();

app.get("/", (c: Context) => {
  return c.text("Hello Hono!");
});

shoppingCartsApi(app);

export { app };
