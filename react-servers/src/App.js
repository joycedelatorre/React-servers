import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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


class App extends Component {
  render() {

    return (
      <Router>
        <div style={sectionStyle}>
        </div>
      </Router>
    );
  }
}

export default App;
