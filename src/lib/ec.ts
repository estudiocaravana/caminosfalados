const URL_DIRECTUS = 'http://panel.camiñosfaladosdarua.gal';

const obtenItems = async (nombreItems: string) => {
    try {
        console.log("--------------------------------");
        console.log("Obteniendo items de tipo " + nombreItems + "...");
        console.log("--------------------------------");
        // Por ahora ponemos un fields=*.* por cada nivel que queramos bajar
        const result = await fetch(`${URL_DIRECTUS}/items/${nombreItems}?fields=*.*.*.*`, {
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
};

const leeItems = (nombreItems: string) => {
    const URL = process.env.NETLIFY ? process.env.URL : "http://localhost:8888";

    return fetch(
        `${URL}/.netlify/functions/${nombreItems}`
    ).then((res) => res.json());
};

export { obtenItems, leeItems };