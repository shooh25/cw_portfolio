import { createClient } from "microcms-js-sdk";

const client = createClient({
  serviceDomain: import.meta.env.VITE_SERVICE_DOMAIN || "",
  apiKey: import.meta.env.VITE_API_KEY || "",
});

// 実績一覧
export const getWorkList = async (limit: number = 10) => {
  return await client
    .get({
      endpoint: "works",
      queries: {
        limit: limit,
      },
    })
    .then((res) => {
      return res;
    });
};

// 実績詳細
export const getWorkItem = async (contentId: string) => {
  return await client
    .get({
      endpoint: "works",
      contentId: contentId,
    })
    .then((res) => {
      return res;
    });
};
