import React from 'react';
import Header from './Header';
import About from './About';

function App() {
  return (
    <div>
      <Header />
      <main className="w-full flex justify-center">
        <div className='max-w-screen-3xl'>
          <About />
        </div>
      </main>
    </div>
  );
}

export default App;