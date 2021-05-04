import React from 'react';

class VaultSearch extends React.Component {
	
	render() {
		return (
			<div>
				<form>
					<fieldset>
						<legend> Simple Search </legend>
						<label>
							Doc Name :
							<input type="text" placeholder />
						</label>
					</fieldset>
				</form>
			</div>
		);
	}
}

export default VaultSearch;