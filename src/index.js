import React from 'react';
import ReatDOM from 'react-dom';
import './index.css';

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {time: new Date()};
	}

	render() {
		return (
			<div>
				Time now is :  {this.state.time.toLocaleTimeString()}
			</div>
		)
	}

	tick() {
		this.setState({
			time: new Date()
		});
	}

	componentDidMount() {
		this.timerID = setInterval( () => this.tick(), 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);

	}

}

ReatDOM.render(<Clock/>, document.getElementById('root'));