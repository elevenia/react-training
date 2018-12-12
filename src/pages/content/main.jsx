import React, { Component } from 'react';

class Main extends Component {

    constructor () {    
        super()    
        this.state = {      
            button1: true
        }  
    }

    render() {
        return (
            <div className="main card">
                <div className="main__image"></div>
                <div className="main__detail">
                    <h1>Hacktiv8 Meetup</h1>
                    <p>
                        <span>Location</span>
                        <span>Jakarta, Indonesia</span>
                    </p>
                    <p>
                        <span>Members</span>
                        <span>1,078</span>
                    </p>
                    <p>
                        <span>Organizers</span>
                        <span>Ardy Wirananta</span>
                    </p>
                    <a href="#main" className={this.state.button1 ? "success" : "error"}>Join Us</a>
                </div>
            </div>
        );
    }
}

export default Main;