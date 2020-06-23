import React from "react";

class Search extends React.Component {
	state = {
		term: "",
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.searchArticle(this.state.term);
	};

	onChange = (e) => {
		this.setState({ term: e.target.value });
	};
	render() {
		return (
			<form className="ui form" onSubmit={this.onSubmit}>
				<div className="field">
					<input
						style={{ marginBottom: "2rem" }}
						type="text"
						placeholder="Search articles..."
						value={this.state.term}
						onChange={this.onChange}
					/>
				</div>
			</form>
		);
	}
}
export default Search;
