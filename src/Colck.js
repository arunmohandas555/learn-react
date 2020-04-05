import React from 'react';

class Clock extends React.Component {

	constructor(props) {
		super(props);
		this.state = {time: new Date()};
	}

	render() {
		return (
			<div>
                This is the Clock Component <br/>
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

export default Clock;
