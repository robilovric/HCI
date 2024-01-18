import Image from "next/image";
import { Post } from "@/app/news&lifestyle/page";

interface NewsCardProps {
    title: string;
    url: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, url }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-4 h-full">
      <Image
        className="w-full h-56 object-cover object-center"
        src= {url}
        width={400}
        height={300}
        alt="News Article"
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2 capitalize text-grey-500">
          {title}
        </h2>
        {/* You can use post.url wherever you need it */}
      </div>
    </div>
  );
};

export default NewsCard;
