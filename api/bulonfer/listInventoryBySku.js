import fetch from "node-fetch";

export default async function handler(request, response) {
  const { skuId } = request.query;

  try {
    const res = await fetch(
      `https://bulonfer.vtexcommercestable.com.br/api/logistics/pvt/inventory/skus/${skuId}`,
      {
        method: "get",
        headers: {
          "Accept": "application/json",
      		"Content-Type": "application/json; charset=utf-8",
          "X-VTEX-API-AppKey": process.env.BULONFER_VTEX_APPKEY,
          "X-VTEX-API-AppToken": process.env.BULONFER_VTEX_APPTOKEN,
        },
      }
    );

    const jsonRes = await res.json();
    response.status(200).json(jsonRes);
  } catch (error) {
    response.status(500).json(error);
  }
}
