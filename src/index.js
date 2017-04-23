import React from 'react'; 
import ReactDOM from 'react-dom'; 
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search';

const API_Key = 'AIzaSyBAKHFMi21weYGvvaplraES6-HLZpqUmFU';


YTSearch( {key: API_Key, term: 'Eric Clapton'}, function(data) { // test in console
  console.log(data);
});
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