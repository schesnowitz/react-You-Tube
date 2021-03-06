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
				<div className="search-bar">
				<input 
				value={this.state.term}  
				onChange={event => this.onInputChange(event.target.value)} /> 

				</div>
/*
using value={this.state.term}  turns this into a controlled component - controlled form element
this now has its value set by state
value only changes when the state changes

*/				
				);
			}

			onInputChange(term) {
				this.setState({term});
				this.props.onSearchTermChange(term); 
			}
    }


export default SearchBar;