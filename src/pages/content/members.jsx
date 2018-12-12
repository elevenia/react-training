import React, { Component } from 'react';

class Member extends Component {

    render() {
        return (
            <div>
                <div className="jst-between">
                    <h2 className="title">Members</h2>
                    <a href="#see">See all</a>
                </div>
                <div className="members">
                    <div className="card">
                        <div className="members__image"></div>
                        <div>
                            <h3>Organizers</h3>
                            <p>
                                <span>Adhy Wirananta</span>
                                <span>4 Others.</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Member;