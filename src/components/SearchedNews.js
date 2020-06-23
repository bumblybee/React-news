import React from "react";
import NewsCard from "./NewsCard";

const SearchedNews = ({ searchedArticles }) => {
	const articles = searchedArticles.map((article, index) => {
		return <NewsCard article={article} key={index} />;
	});

	return <div className="articles">{articles}</div>;
};

export default SearchedNews;
