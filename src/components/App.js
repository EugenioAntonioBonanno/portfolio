import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <main className="w-full flex justify-center">
            <div className='w-full max-w-screen-2xl'>
              <Route path='/' exact component={About} />
              <Route path='/contact' exact component={Contact} />
              <Route path='/experience' exact component={Experience} />
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;