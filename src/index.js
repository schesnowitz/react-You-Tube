import React from 'react'; 
import ReactDOM from 'react-dom'; 


// const App = function() { 
//   return <div>Hello Steve</div>;
// }

const App = () => { // ES6 syntax
  return <div>Hello Steve</div>;
};


ReactDOM.render(<App />, document.querySelector('.container'));