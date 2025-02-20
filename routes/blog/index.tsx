import Page from "../../components/Page.tsx";
import PostCard from "../../components/PostCard.tsx";
import { getAllPosts } from "../../utils/posts.ts";

export default async function BlogIndex() {
  return (
    <Page>
      <h1 className="text-4xl font-semibold">ブログ</h1>
      {(await getAllPosts()).map((post) => <PostCard post={post} />)}
    </Page>
  );
}
