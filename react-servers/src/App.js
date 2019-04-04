import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Background from "./components/Background/Image/NASA.png";
import Dashboard from "./components/Dashboard.jsx";


const sectionStyle = {
  top: 0,
  right: 0,
  left: 0,
  bottom: 0,
  backgroundImage: "url(" + Background + ")",
  backgroundRepeat: "no-repeat center center fixed",
  backgroundAttachment: "fixed",
  backgroundSize: "cover",
  width: "100%",
  position: "absolute",
  overflow: 'scroll'
}


// class App extends Component {
//   render() {

//     return (
//       <Router>
//         <div className="sectionStyle">
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;


function Index() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div style={sectionStyle}>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Index} />
        <Route path="/about/" component={About} />
        <Route path="/users/" component={Users} />
      </div>
    </Router>
  );
}

export default AppRouter;