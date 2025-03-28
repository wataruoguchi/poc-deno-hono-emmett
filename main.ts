import { app } from "./app/app.ts";
Deno.serve(app.fetch);
