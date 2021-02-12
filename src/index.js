import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './components/header';
import About from './components/about';

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

