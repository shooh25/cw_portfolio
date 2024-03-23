import { getWorkList } from "../apis/microcms";
import { getWorkItem } from "../apis/microcms";
import { useQuery } from "react-query";

export const useWorkQuery = (options: SearchOptions) => {
  if (options.asList) {
    return useQuery("works", () => getWorkList(options.limit));
  } else {
    return useQuery("work", () => getWorkItem(options.contentId));
  }
};
