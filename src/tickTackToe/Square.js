import React from "react";

export default class Square extends React.Component {
	render() {
		return (
			<button style={{width:'30px', height:"30px"}}
				onClick={this.props.onClick}
			>
				{this.props.value}
			</button>
		);
	}
}