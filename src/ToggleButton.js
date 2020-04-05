import React from 'react';

class ToggleButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isToggleOn: true}; 
    }

    handleClick = (e) => {
        console.log('click detected');
        
        this.setState( (state, props) => {
            return {
                isToggleOn: ! state.isToggleOn
            }
        });
    }

    render() {
        return (
            <div>
                This is the ToggleButton
                <input type="button" value={this.state.isToggleOn} onClick={this.handleClick} />
                    
            </div>
        );
    }
}
export default ToggleButton;
