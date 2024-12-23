import type { Context } from "@netlify/functions";
import { obtenItems } from "../../src/lib/ec.ts";

export default async (req: Request, context: Context) => {
    // Obtenemos la colección del parámetro coleccion de la req
    const coleccion = new URL(req.url).searchParams.get('coleccion');

    return coleccion ? obtenItems(coleccion) : undefined;
}