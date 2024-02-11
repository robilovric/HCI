import contentfulService from "../../../../../lib/contentfulClient";
import Image from "next/image";

interface Params {
  postId: string;
}

export default async function NewsPost({ params }: { params: Params }) {
  const post = await contentfulService.getPostId(params.postId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">{post?.newsTitle}</h1>
      <p className="text-xl px-10 pt-4 pb-8 text-justify">
        {post?.newsContent}
      </p>
      <Image
        className="w-3/5 h-3/5 object-cover object-center shadow-xl"
        src={post?.url ? post.url : ""}
        width={400}
        height={300}
        alt="News Article"
      />
    </main>
  );
}
