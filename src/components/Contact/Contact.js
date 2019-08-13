import React, { Component } from 'react';

class Contact extends Component {
    render () {
        return (
            <div>
                <h1>Contact</h1>
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="text" placeholder="Best Impression" />
                <button>Join Us!</button>
                <p>1-800-WE-REACT</p>
                <p>Email: info@reactActors.com</p>
            </div>
        )
    }
}


export default Contact;