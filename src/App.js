import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Header from "./pages/header";
import Main from "./pages/main";



class App extends Component {    
    render() {
        return (
                <Router>                        
                    <div>  
                        <Header/>
                        <Main/>
                    </div>                
                </Router>
                );
    }
};

export default App;
