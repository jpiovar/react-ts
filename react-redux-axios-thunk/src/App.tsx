import React, { Component } from 'react';
import { Switch, Route, Link, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
// import logo from './logo.svg';
import './App.css';
import HomePage from './containers/home/homePage';
import RecordsPage from './containers/records/recordsPage';
import RecordPage from './containers/record/recordPage';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
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

// export default App;
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/records">Records</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path={["/", "/home"]} component={HomePage} />
            <Route exact path="/records" component={RecordsPage} />
            <Route path="/records/:itemId" component={RecordPage} />
            <Route>404 Not Found!</Route>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App;
