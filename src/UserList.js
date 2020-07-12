import React from 'react'
import User from './User'
import axios from 'axios';

class UserList extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			userDataList: []
		};
	}

	componentDidMount() {
		axios.get('https://reqres.in/api/users?page=1')
			.then( (res) => {
				this.setState({userDataList: res.data.data})
			});
	}

	render(){

		let userComponentList = this.state.userDataList.map((userData) => 
			<User 
				key        = {userData.id}
				id         = {userData.id}
				email      = {userData.email}
				first_name = {userData.first_name}
				last_name  = {userData.last_name}
				avatar     = {userData.avatar} />
		);

		return (
			<div className="userList">
				{userComponentList}
			</div>
		);
	}
}

export default UserList;