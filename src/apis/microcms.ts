import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.VITE_SERVICE_DOMAIN || "",
  apiKey: import.meta.env.VITE_API_KEY || "",
});

// 実績一覧
export const getWorkList = async () => {
  return await client
    .get({
      endpoint: "works",
    })
    .then((res) => {
      return res;
    });
};
