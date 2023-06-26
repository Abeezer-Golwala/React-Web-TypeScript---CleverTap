import React from 'react';
import logo from './logo.svg';
import './App.css';
import clevertap from 'clevertap-web-sdk';
clevertap.init('468-W87-546Z') 
clevertap.setLogLevel(3)
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
