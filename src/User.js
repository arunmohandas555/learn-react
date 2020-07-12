import React from 'react'
import axios from 'axios'

class User extends React.Component {

	constructor(props){
		super(props);
		this.state = {};
	}

	render() {
		const mailtoLink = 'mailto:' + this.props.email
		return (
			<div>
				<div><img src={this.props.avatar} alt='Profile Pic'></img></div>
				<div>Name: {this.props.first_name} {this.props.last_name}</div>
				<div>email: <a href={mailtoLink}>{this.props.email}</a></div>
			</div>
		);
	}
}

export default User