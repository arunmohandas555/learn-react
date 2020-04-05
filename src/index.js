import React from 'react';
import ReatDOM from 'react-dom';
import './index.css';
import Clock from './Colck'
import ToggleButton from './ToggleButton';

class App extends React.Component {
	
	render() {
		return(
			<div>
				This is the App Component
				<Clock/>
				<ToggleButton/>
			</div>
		);
	}
}

ReatDOM.render(<App/>, document.getElementById('root'));
