import React from 'react';
import ReatDOM from 'react-dom';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import './index.css';
import UserList from './UserList';
import AddUserForm from './AddUserForm';
import VaultSearch from './VaultSearch';
import {createStore} from 'redux';
import allReducers from './reducers';
import {Provider} from 'react-redux';
import {useSelector} from 'react-redux';
import Game from './tickTackToe/Game';

// redux store
let myStore = createStore(
	allReducers,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


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
					<Link to="/vault/search">
						<button>Vault > Search</button>
					</Link>
					
					<Switch>
						<Route path="/vault/search" component={VaultSearch} />
						<Route path="/user-list" component={UserList}/>
						<Route path="/add-user" component={AddUserForm} />
						<Route path="/">
							<div>Home Page</div>
							<div>Counter: {useSelector(state => state.counter)} </div>
						</Route>
					</Switch>

				</Router>

				


				
			</div>
			
		);
	}
}

ReatDOM.render(
	
	<Provider store={myStore}>
		<Game/>
	</Provider>,
	
	document.getElementById('root')
);
