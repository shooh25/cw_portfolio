import { getWorkList } from "../apis/microcms";
import { getWorkItem } from "../apis/microcms";
import { useQuery } from "react-query";

export const useWorkQuery = (options: SearchOptions) => {
  if (options.asList) {
    const res = useQuery("works", () => getWorkList(options.limit));
    const works: WorkObj[] | undefined = res.data?.contents;
    return works;
  } else {
    const res = useQuery("work", () => getWorkItem(options.contentId));
    const work: WorkObj | undefined = res.data;
    return work;
  }
};
