import React, { Component } from 'react';
import Main from './main';
import Next from './next';
import About from './about';
import Member from './members';
import Pasts from './pasts';

class Content extends Component {

    render() {
        return (
            <div className="container">
                <Main></Main>
                <Next></Next>
                <About></About>
                <Member></Member>
                <Pasts></Pasts>
            </div>
        );
    }
}

export default Content;