import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Input from './components/Input';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider store={ store }>
        <div className="App">
          <Input />
        </div>
      </Provider>
    );
  }
}

export default App;
