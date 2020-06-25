import React from 'react';
//import logo from './logo.svg';
import logo from './images/logo.png';
import './App.css';


function App() {
  return (    
    <div className="page-container">
    <div className="welcome-bg">
        <div className="page-header">
            <div className="site-logo">
                <img src={logo} />
            </div>
            <div className="header-link">
                <a href="#" title="signup">Sign In</a>
            </div>
        </div>
        <div className="try-jaam">
            <button className="cta-try-jaam" type="button">Try for Free</button>
        </div>
    </div>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Welcome to Jaam! Please signup to continue.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
         
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
