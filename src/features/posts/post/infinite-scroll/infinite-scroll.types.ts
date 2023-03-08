export interface PostURL {
  url: string;
  metadata: string[];
}
export interface PostContentType {
  data: {
    postURL: PostURL[];
  };
}
