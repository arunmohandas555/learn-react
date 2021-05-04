import React from "react";
import Square from "./Square";

export default class Board extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			squares: Array(9).fill(null),
			whoIsNext: 'X',
			gameStatus: 'Next turn X'
		}
	}

	handleClick = (i) => {
		
		let squares = this.state.squares.slice(); 

		if(this.calculateWinner(squares) || squares[i]) return;

		squares[i] = this.state.whoIsNext;
		this.setState({squares});

		let whoIsNext = 'X';
		
		if(this.state.whoIsNext == 'X'){
			whoIsNext = 'O';
		}
		
		if(this.calculateWinner(squares)){
			this.setState({
				gameStatus: 'winner '+ this.state.whoIsNext
			});
		}
		else {
			this.setState({
				whoIsNext:whoIsNext,
				gameStatus: 'Next turn '+ whoIsNext
			});
		}
	}

	calculateWinner = (squares) => {
		const lines = [
		  [0, 1, 2],
		  [3, 4, 5],
		  [6, 7, 8],
		  [0, 3, 6],
		  [1, 4, 7],
		  [2, 5, 8],
		  [0, 4, 8],
		  [2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
		  const [a, b, c] = lines[i];
		  if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
			return squares[a];
		  }
		}
		return null;
	  }

	renderSqaure = (i) => {

		return (
			<Square
				value={this.state.squares[i]}
				onClick={() => this.handleClick(i)}
			/>
		);
		
	}

	render() {

		return (
			<div className="Board">
				<div className="row">
					{this.renderSqaure(0)}
					{this.renderSqaure(1)}
					{this.renderSqaure(2)}
				</div>
				<div className="row">
					{this.renderSqaure(3)}
					{this.renderSqaure(4)}
					{this.renderSqaure(5)}
				</div>
				<div className="row">
					{this.renderSqaure(6)}
					{this.renderSqaure(7)}
					{this.renderSqaure(8)}
				</div>
				<div className="gameStatus">
					{this.state.gameStatus}
				</div>
			</div>
			
		);
	}
}