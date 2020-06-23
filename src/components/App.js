import React, { Component } from "react";
import Header from "./Header";
import Search from "./Search";
import LandingNews from "./LandingNews";
import SearchedNews from "./SearchedNews";

class App extends Component {
	state = {
		articles: [],
	};

	searchArticle = async (term) => {
		const res = await fetch(
			`https://newsapi.org/v2/everything?q=${term}&sortBy=relevancy&language=en&apiKey=6e95477a65bb4eaea19e3f72be929b92`
		);

		const data = await res.json();
		console.log(data);
		this.setState({ articles: data.articles });
	};

	async componentDidMount() {
		const res = await fetch(
			`https://newsapi.org/v2/top-headlines?country=us&apiKey=6e95477a65bb4eaea19e3f72be929b92`
		);

		const data = await res.json();
		this.setState({ articles: data.articles });
	}

	render() {
		return (
			<div className="container">
				<Header />
				<Search searchArticle={this.searchArticle} />
				<LandingNews articles={this.state.articles} />
				<SearchedNews searchedArticles={this.state.articles} />
			</div>
		);
	}
}

export default App;
