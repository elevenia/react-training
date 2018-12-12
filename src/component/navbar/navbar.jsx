import React, { Component } from 'react';

class Navbar extends Component {

    constructor(props) {    
        super(props)    
        this.state = {      
            username: 'Jhon Doe'  
        }
    }   
    
    // login = () => {    
    //     this.setState({      
    //         username: 'Jhon Doe'    
    //     })  
    // }  
    
    // logout = () =>{    
    //     this.setState({     
    //         username: ''    
    //     })  
    // } 

    render() {
        return (
            <div className="navbar">
                <div className="container navbar__wrap">
                    <div className="navbar__left">
                        <a href="#nav">{this.props.menus.menu1}</a>
                        <a href="#nav">{this.props.menus.menu2}</a>
                        <a href="#nav">{this.props.menus.menu3}</a>
                    </div>
                    <div className="navbar__right">
                        {/* <a href="#" onClick={this.login}>{this.state.username}</a> */}
                        <a href="#nav" onClick={this.logout}>{this.props.menus.menu4}</a>
                        {/* onClick ={ () => this.props.tolowor(param)} */}
                        <button onClick ={ () => this.props.lower('PARAMETER')}>test</button>
                    </div>
                </div>
            </div>
        );


    }
}

export default Navbar;