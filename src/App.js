import React, { Component } from 'react';
import { Route, Link} from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from './components/Login';
import Admin from './components/Admin';
import Logout from './components/Logout';

class App extends Component {
  render() {
    return(
      <Router>
        <Route exact path ="/" component = {Login} />
        <Route  path ="/admin" component = {Admin} />
        <Route  path ="/logout" component = {Logout} />
      </Router>
    )
  }
}



// function Apps() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
