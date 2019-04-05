import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
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

function Logs() {
  return <h2>Logs</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function AppRouter() {
  return (
    <Router>
      <div style={sectionStyle}>
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand> Aruba Servers</Navbar.Brand>    
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">      
          
              <Nav defaultActiveKey="/" className="flex-column">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/logs/">Logs</Nav.Link>
                <Nav.Link href="/users/">Users</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>;
        <Route path="/" exact component={Index} />
        <Route path="/logs/" component={Logs} />
        <Route path="/users/" component={Users} />
      </div>
      
    </Router>
  );
}

export default AppRouter;