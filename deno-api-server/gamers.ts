import { Router, HttpError } from "https://deno.land/x/oak/mod.ts";
import { config } from "https://deno.land/x/dotenv/mod.ts";
import ky from "https://unpkg.com/ky/index.js";

const router = new Router();
const controller = new AbortController();
const { signal } = controller;

setTimeout(() => {
  controller.abort();
}, 5000);

// Get a player
router.get(
  "/api/v1/player/:platform/:player",
  async ({
    response,
    params,
  }: {
    response: any;
    params: {
      platform: string;
      player: string;
    };
  }) => {
    const { platform, player } = params;

    const url = `${config().TRACKER_API_URL}/${platform}/${player}`;

    const api = ky.extend({
      hooks: {
        beforeRequest: [
          ({ headers }: { headers: any }) => {
            headers.set("TRN-Api-Key", config().TRACKER_API_KEY);
          },
        ],
      },
    });

    try {
      const user = await api.get(url, { signal }).json();
      response.body = user;
    } catch (error) {
      if (error.name === "AbortError") {
        response.status = 103;
        response.body = "Request Aborted";
      } else {
        response.status = 404;
        response.body = "Not found";
      }
    }

    //Deno javascript fetch
     /* const headers = {
       "TRN-Api-Key": config().TRACKER_API_KEY,
     };

     const resData = await fetch(`${url}`, { headers });

     if (!resData.ok) {
       const { statusText }: { statusText: any } = resData;
       response.status = 404;
       response.body = statusText;
     } else {
       response.body = await resData.json();
       response.status = 200;
     }*/
  }
);

export default router;
