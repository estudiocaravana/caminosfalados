/**
 * Lee los items de un tipo de contenido de la versión compilada en Netlify
 * 
 * @param nombreItems Nombre del tipo de contenido
 * @returns Datos de los items
 */
const leeItems = (nombreItems: string) => {
    const URL = process.env.NETLIFY ? process.env.URL : "http://localhost:8888";

    return fetch(
        `${URL}/.netlify/functions/obten_coleccion?coleccion=${nombreItems}`
    ).then((res) => res.json());
};

export { leeItems };