import React, {Component} from 'react';

/*
 // this is a functional component
const SearchBar = () => {
    return <input />;
};
*/

// class based component

class SearchBar extends Component {
	
	constructor (props) {
		super(props); 
		/*component has it's own constructor super allowes us to call constructor on
		parent class by using super
		*/

		this.state = {term: ''}; 
	/*	
		state is a plain JS object that exists on any component that is a class based component
		create new object and assign it to state - property term is assigned to state
	*/	
	}
    render() {
			return (
				<div>
				<input onChange={event => this.setState({term: event.target.value})} /> 
				Value of the input: {this.state.term}
				</div>
/*
pass in object and then set its state
*/				
				);
			}
    }


export default SearchBar;