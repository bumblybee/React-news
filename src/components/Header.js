import React from "react";

const Header = () => {
	return (
		<div style={headerStyle} className="ui sizer vertical segment">
			<div style={{ color: "white" }} className="ui huge header">
				React News
			</div>
		</div>
	);
};

const headerStyle = {
	fontSize: "2rem",
	padding: "2rem",
	textAlign: "center",
	backgroundColor: "#34495E",
};

export default Header;
