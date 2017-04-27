import React, { Component } from 'react';
import TodosList from './components/TodosList'; //zawiera logike aplikacji oraz dumb components
import './css/styles.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TodosList/>
      </div>
    );
  }
}

export default App;
