import Link from "next/link";
import Pagination from "@/app/news&lifestyle/components/Pagination";
import NewsCard from "@/app/news&lifestyle/components/NewsCard";
import { getPosts } from "@/app/news&lifestyle/lib/api";
import { parseSearchParams } from "@/app/news&lifestyle/lib/utils";
import contentfulService from "../../../../lib/contentfulClient";

export const metadata = {
  title: "News & Lifestyle",
};

// export type SearchParams = {
//   searchParams: {
//     [key: string]: string | string[] | undefined;
//   };
// };

export type SearchParams = {
  searchParams: Record<string, string | string[] | undefined>;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export type PageProps = {
  page: number;
  limit?: number;
};

export type PaginationProps = {
  first?: PageProps;
  prev?: PageProps;
  next?: PageProps;
  last?: PageProps;
};

export default async function Blog({ searchParams }: SearchParams) {
  const { page, limit } = parseSearchParams({ searchParams });
  const { posts, pagination } = await getPosts({ page, limit });
  const news = await contentfulService.getAllPosts();
  
  return (
    <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10">News Index Page</h1>

      <Pagination pagination={pagination} page={page} />


      <ul className="grid md:grid-cols-2 gap-12">
        {news.map((post) => (
          <li key={post.id}>
            <Link href={`news&lifestyle/${post.id}`}>
            <NewsCard post={{ title: post.newsTitle, url: post.url }} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
