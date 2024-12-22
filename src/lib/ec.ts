const URL_DIRECTUS = 'http://panel.camiñosfaladosdarua.gal';

const obtenItems = (nombreItems: string) => {
    return async () => {
        try {
            console.log("--------------------------------");
            console.log("Obteniendo items de tipo " + nombreItems + "...");
            console.log("--------------------------------");
            const result = await fetch(`${URL_DIRECTUS}/items/${nombreItems}`, {
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
        
            return {
                statusCode: 200,
                body: JSON.stringify(result.data),
            };
        } catch (error) {
            console.log(error);
        }
    }
};

const leeItems = (nombreItems: string) => {
    return fetch(
        `${import.meta.env.NETLIFY_URL}/.netlify/functions/${nombreItems}`
    ).then((res) => res.json());
};

export { obtenItems, leeItems };