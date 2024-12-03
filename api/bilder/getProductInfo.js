import fetch from "node-fetch";

export default async function handler(request, response) {
    const { productId } = request.query;
    try {
        const res = fetch(
            `https://mkptiendabilderar.vtexcommercestable.com.br/api/catalog_system/pvt/products/productget/${productId}`,
            {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json; charset=utf-8",
                    "X-VTEX-API-AppKey": process.env.BILDER_VTEX_APPKEY,
                    "X-VTEX-API-AppToken": process.env.BILDER_VTEX_APPTOKEN,
                },
            }
        );
        const jsonres = await res.json();
        response.status(200).json(jsonres);
    } catch (error) {
        response.status(500).json(error)
    }
}