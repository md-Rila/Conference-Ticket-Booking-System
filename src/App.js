import './App.css';
import React from 'react';
 import Home from'./Home';
 import Header from './Header';
 import Registrations from './Registrations';
 import Login from './Login';
 import Book from './Book';
 //import { Link } from "react-router-dom";
import { BrowserRouter as Router,Route } from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Header />
        <Route path='/Home'>
          <Home />
        </Route>
        <Route path='/Registrations'>
          <Registrations />
        </Route>
        <Route path='/Login'>
          <Login />
        </Route>
        <Route path='/Book'>
          <Book />
        </Route>
    </div>
    </Router>
  );
}

export default App;
