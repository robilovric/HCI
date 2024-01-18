import { Post } from "../page";
import contentfulService from "../../../../../lib/contentfulClient";
import Image from "next/image";

interface Params {
  postId: string;
}

export default async function NewsPost({ params }: { params: Params }) {
  const post = await contentfulService.getPostId(params.postId);

  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">
        <span className="text-neutral-400">News article {post?.id}: </span>
        {post?.newsTitle}
      </h1>
      <p className="text-xl p-10">{post?.newsContent}</p>
      <Image
        className="w-52 h-56 object-cover object-center"
        src= {post?.url? post.url: ""}
        width={400}
        height={300}
        alt="News Article"
      />
    </main>
  );
}
