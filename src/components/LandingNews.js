import React from "react";
import "./NewsList.css";
import NewsCard from "./NewsCard";

const LandingNews = (props) => {
	const articles = props.articles.map((article, index) => {
		return <NewsCard article={article} key={index} />;
	});

	return <div className="articles">{articles}</div>;
};

export default LandingNews;
