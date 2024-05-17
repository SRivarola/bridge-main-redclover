import fetch from "node-fetch";

export default async function handler(request, response) {
  const { itemId, selectedQuantity, sellerId, postalCode } = request.query;

  try {
    const res = await fetch(
      `https://bulonfer.vtexcommercestable.com.br/api/checkout/pub/orderForms/simulation`,
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=utf-8",
          "X-VTEX-API-AppKey": process.env.NATURALLIFE_VTEX_APPKEY,
          "X-VTEX-API-AppToken": process.env.NATURALLIFE_VTEX_APPTOKEN,
        },
        body: JSON.stringify({
          items: [
            {
              id: `${itemId}`,
              quantity: `${selectedQuantity}`,
              seller: `${sellerId}`,
            },
          ],
          country: "ARG",
          postalCode: `${postalCode}`,
        }),
      }
    );

    const jsonRes = await res.json();
    response.status(200).json(jsonRes);
  } catch (error) {
    response.status(500).json(error);
  }
}
