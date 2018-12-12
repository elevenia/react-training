import React, { Component } from 'react';
import Navbar from './navbar';

class Header extends Component {
    constructor () {    
        super()    
        this.state = {      
            menu1: 'QTemu',  
            menu2: 'Create Meetup',  
            menu3: 'Explore',  
            menu4: 'Login',  
        }  
    }   

    toLower(param){
        console.log(param.toLowerCase())
    }

    render() {
        return (
            <Navbar menus={this.state} lower={this.toLower}></Navbar>
        );
    }
}

export default Header;