import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';

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
              <Route path='/projects' exact component={Projects} />
            </div>
          </main>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;