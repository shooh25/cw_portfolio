// microCMS
// https://document.microcms.io/

interface WorkObj {
  id: string;
  title: string;
  client: string;
  detail: string;
  term: string;
  link: string;
  scope: string[];
  image: ImageObj[];
}

interface ImageObj {
  url: string;
}

// 記事取得パラメーター
type SearchOptions =
  | {
      asList: true;
      limit: number;
    }
  | {
      asList?: false;
      contentId: string;
    };
