/**
 * Obtiene los items de una colección de Directus
 */

import type { Context } from "@netlify/functions";

export default async (req: Request, context: Context) => {
    const URL_DIRECTUS = 'http://panel.camiñosfaladosdarua.gal';

    // Sacamos la colección del parámetro coleccion de la req
    const coleccion = new URL(req.url).searchParams.get('coleccion');

    if (coleccion) {
     // Obtenemos los items de un tipo de contenido del panel en Directus
        try {
            console.log("--------------------------------");
            console.log("Obteniendo items de tipo " + coleccion + "...");
            console.log("--------------------------------");
            // Por ahora ponemos un fields=*.* por cada nivel que queramos bajar
            // TODO Hacer que no sea necesario poner tantos *.* y que se pueda bajar todo el árbol de una vez
            const result = await fetch(`${URL_DIRECTUS}/items/${coleccion}?fields=*.*.*.*`, {
                method: "GET",
                headers: {
                "Content-Type": "application/json",
                },
            }).then((res) => res.json());
            if (result.errors) {
                console.log({ errors: result.errors });
            } else if (!result || !result.data) {
                console.log({ result });
                return "No results found.";
            }
        
            return new Response(JSON.stringify(result.data));
        } catch (error) {
            console.log(error);
        }
    } 

    // Si no hay colección, devolvemos undefined    
    return undefined;
}