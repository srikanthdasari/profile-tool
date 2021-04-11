import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Dashboard from './components/Dashboard';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas, faCheckSquare, faCoffee)

const App = () => {
  return (
    <>

      <div>
        <Header />
        <Search />
        <Dashboard />
      </div>

    </>
  );
}

export default App;
