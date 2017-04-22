import React from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar';


const API_Key = 'AIzaSyBAKHFMi21weYGvvaplraES6-HLZpqUmFU';

// const App = function() {
// return <div>Hello Steve</div>;
// };

const App = () => { // ES6 syntax
  return (
  <div>
    <SearchBar />
  </div>
  );
};


ReactDOM.render(<App />, document.querySelector('.container'));