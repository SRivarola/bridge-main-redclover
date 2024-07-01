import fetch from "node-fetch";

export default async function handler(request, response) {
  try {
    
    const res = await fetch(
      `https://previsoraarg.vtexpayments.com.br/api/pvt/rules`,
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

    const jsonRes = await res.json();

    response.status(200).json(jsonRes);

  } catch (error) {
    response.status(500).json(error);
  }
}
