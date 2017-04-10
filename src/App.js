import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import TodoApp from './todo'
import MarkdownEditor from './editor'


// 程序的主入口
// class 是 es6 的语法
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to Guact</h2>
        </div>
        <TodoApp />
        <MarkdownEditor />
      </div>
    )
  }
}

export default App;
