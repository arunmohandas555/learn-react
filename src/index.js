import React from 'react';
import ReatDOM from 'react-dom';
import './index.css';
import Clock from './Colck'

class App extends React.Component {
	
	render() {
		return(
			<div>
				This is the App Component
				<Clock/>
			</div>
		);
	}
}

ReatDOM.render(<App/>, document.getElementById('root'));
