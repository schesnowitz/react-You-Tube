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
			return(
				<input />
			);
    }
}

export default SearchBar;