import React from 'react';
import './App.css';
// import Home from './views/home';
// import {BrowserRouter as Router} from 'react-router-dom'
// import Footer from './footer'
import Base from './components/base'


function App() {

  return (
      <div className='home'>
            {/* <Router>
                <Home />
            </Router>
            <Footer /> */}
            <Base />
      </div>
    );
}

export default App;
