import React, {Component} from 'react';

/*
 // this is a functional component
const SearchBar = () => {
    return <input />;
};
*/

// class based component

class SearchBar extends Component {
    render() {
			return (
				<input onChange={event => console.log(event.target.value)} /> // event handler gets triggered when even occurs
				// onChange is react spacific property 
				// no need to wrap event (event) => as only one argument
				);
			}
    }


export default SearchBar;