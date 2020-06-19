import React, { Component } from 'react';
import Logo from '../assets/logo.png';
import '../App.css';

class Page1 extends Component {
    
    render() {
        return (
            <React.Fragment>
                <div className="imgDiv">
                    <img src={Logo} className="" alt="" />
                </div>
                <h1>Welcome To The Home Page</h1>
            </React.Fragment>
            
        );
    }
}

export default Page1;