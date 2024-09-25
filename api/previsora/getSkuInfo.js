import fetch from "node-fetch";

export default async function handler(request, response) {
    const { skuId } = request.query;
    try {
        const res = await fetch(
          `https://previsoraarg.vtexpayments.com.br/api/catalog/pvt/stockkeepingunit/${skuId}`,
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json; charset=utf-8",
              "X-VTEX-API-AppKey": process.env.PREVISORA_VTEX_APPKEY,
              "X-VTEX-API-AppToken": process.env.PREVISORA_VTEX_APPTOKEN,
            },
          }
        );

        const jsonres = await res.json();

        response.status(200).json(jsonres);

    } catch (error) {
        response.status(500).json(error);
    }
}