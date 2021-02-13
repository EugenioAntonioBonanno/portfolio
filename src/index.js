import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/Header';
import About from './components/About';

function App() {
  return (
    <div>
      <Header />
      <About />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

