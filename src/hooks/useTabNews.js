import data from "../data/tabnews.json";

export function useTabNews() {
  return {
    posts: data.posts,
    updatedAt: data.updated_at ? new Date(data.updated_at) : null,
    isEmpty: data.posts.length === 0,
  };
}
