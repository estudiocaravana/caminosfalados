import type { Context } from "@netlify/functions";
import { obtenItems } from "../../src/lib/ec.ts";

export default async (req: Request, context: Context) => {
    return obtenItems("portada");
}
