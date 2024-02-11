"use client";

import React, { useCallback, useState } from "react";
import NewsCard from "./NewsCard";
import Link from "next/link";

type NewsArticle = {
  newsTitle: string;
  id: string;
  url: string;
  category?: string[];
};

type NewsCardListProps = {
  news: NewsArticle[];
};

const NewsCardList = ({ news }: NewsCardListProps) => {
  const [filterBy, setFilterBy] = useState("");

  const filteredNews = useCallback(() => {
    if (filterBy === "") {
      return news;
    }
    return news.filter((item) => item.category?.includes(filterBy));
  }, [filterBy, news]);
  return (
    <div>
      <div className="mb-4 inline-flex items-center">
        <label className="mr-2">Category:</label>
        <select
          onChange={(event) => setFilterBy(event.target.value)}
          name="category"
          id="category"
          className="pr-8 py-2 border-2 border-gray-700 rounded-xl"
        >
          <option value="" disabled selected>
            Select your option
          </option>

          <option value="">All</option>
          <option value="health">Health</option>
          <option value="tech">Tech</option>
          <option value="nature">Nature</option>
          <option value="wellbeing">Wellbeing</option>
          <option value="fitness">Fitness</option>
          <option value="food">Food</option>
        </select>
      </div>
      <ul className="grid md:grid-cols-2 gap-12">
        {filteredNews().map((post) => (
          <li key={post.id}>
            <Link href={`news&lifestyle/${post.id}`}>
              <NewsCard
                category={post.category}
                title={post.newsTitle}
                url={post.url}
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsCardList;
