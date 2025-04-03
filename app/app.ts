import { type Context, Hono } from "hono";
import { serveStatic } from "hono/serve-static";
import { shoppingCartsApi } from "./shoppingCarts/api.ts";

const app = new Hono();

app.get("/", (c: Context) => {
  return c.text("Hello Hono!");
});

app.get(
  "/coverage/*",
  serveStatic({
    root: "coverage/html/",
    getContent: (path) => Deno.readTextFile(path.replace("html/coverage/", "html/")), // `deno test --coverage && deno coverage --html` to regenerate coverage files.
  }),
);

shoppingCartsApi(app);
export { app };
