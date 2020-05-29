import { Application } from "https://deno.land/x/oak/mod.ts";
import "https://deno.land/x/dotenv/load.ts";

import gamers from "./gamers.ts";
const port = 5000;
const app = new Application();

app.use(gamers.routes());
app.use(gamers.allowedMethods());

console.log(`Server running on port ${port}`);

await app.listen({ port });
