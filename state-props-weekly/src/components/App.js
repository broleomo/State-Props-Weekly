import React, { Component } from 'react';
import '../styles/App.css';
import PlayList from './PlayList';
import NavBar from './NavBar';
import PlayListForm from './PlayListForm';

class App extends Component {
  render() {
    return (
      <div>
      <NavBar/>
      <div className="page-container">
      <PlayListForm/>
      <PlayList />
      </div>
      </div>
    );
  }
}

export default App;
