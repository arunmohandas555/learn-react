import React from 'react';
import ReatDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './index.css';
import UserList from './UserList';
import AddUserForm from './AddUserForm';


class App extends React.Component {
	
	render() {
		return(
			<div>
				
				<Router>
					<Link to="/">
						<button>Home</button>
					</Link>
					<Link to="/user-list">
						<button>User List</button>
					</Link>
					<Link to="/add-user">
						<button>Add User</button>
					</Link>
					
					<Switch>
						<Route path="/user-list" component={UserList}/>
						<Route path="/add-user" component={AddUserForm} />
						<Route path="/">
							<div>Home Page</div>
						</Route>
					</Switch>

				</Router>

				


				
			</div>
			
		);
	}
}

ReatDOM.render(<App/>, document.getElementById('root'));
