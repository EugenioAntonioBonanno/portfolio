import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Header from './Header';
import About from './pages/About'

function App() {
  return (
    <div>
      <Header />
      <main className="w-full flex justify-center">
        <div className='w-full max-w-screen-2xl'>
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;