import Image from "next/image";

interface NewsCardProps {
  title: string;
  url: string;
  category?: string[];
}

const NewsCard: React.FC<NewsCardProps> = ({ title, url, category }) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl overflow-hidden shadow-lg mb-4 h-full">
      <Image
        className="w-full h-56 object-cover object-center"
        src={url}
        width={400}
        height={300}
        alt="News Article"
      />
      <div className="p-6">
        <h2 className="font-bold text-xl mb-2 capitalize text-grey-500">
          {title}
        </h2>
        {category?.map((cat) => (
          <span
            className="text-black ml-2 bg-yellow-200 px-2 py-1 rounded-xl"
            key={cat}
          >
            #{cat}
          </span>
        ))}
      </div>
    </div>
  );
};

export default NewsCard;
