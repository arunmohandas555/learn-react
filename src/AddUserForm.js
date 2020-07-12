import React from 'react'

class AddUserForm extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			first_name: '',
			last_name : '',
			gender : 'Female'
		};
	}

	handleFirstNameChange = (event) =>{
		console.log(event.target.value);
		this.setState( {first_name: event.target.value} );
		
	}

	handleGenderChange = (event) => {
		this.setState({gender: event.target.value});
	}

	render() {
		return (
			<form>
				<label>
					Name:
					<input type="text" onChange={this.handleFirstNameChange} />
				</label>

				<label>
					Gender:
					<select value={this.state.gender} onChange={this.handleGenderChange}>
						<option value=""> - select - </option>
						<option value="Male"> Male </option>
						<option value="Female"> Female </option>
					</select>
				</label>

			</form>
		)
	}
}

export default AddUserForm;