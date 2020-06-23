import React from "react";

const NewsCard = ({ article }) => {
	return (
		<div style={cardStyle} className="ui card">
			<div className="image">
				<img src={article.urlToImage} alt={article.author} />
			</div>
			<div className="content">
				<a href={article.url} target="_blank" rel="noopener noreferrer">
					<h4>{article.title}</h4>
				</a>
				<p style={{ marginTop: "0.5rem" }}>{article.description}</p>
			</div>
		</div>
	);
};

const cardStyle = {
	margin: "0 auto 1rem",
};

export default NewsCard;
