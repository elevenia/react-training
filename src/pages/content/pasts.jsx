import React, { Component } from 'react';
import Past from './past';

class Pasts extends Component {
    render() {
        let names = ['1', '2', '3'];
        return (
            <div>
                <div className="jst-between">
                    <h2 className="title">Past Meetups</h2>
                    <a href="#pasts">See all</a>
                </div>
                <div className="past">
                {names.map(function(index){
                    return <Past key={ index }></Past>;
                  })}
                </div>
            </div>
        );
    }
}

export default Pasts;