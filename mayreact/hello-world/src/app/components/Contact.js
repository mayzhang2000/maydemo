//Contact.js
import React, { Component } from 'react';
import "../../App.css";

export class Contact extends Component {
    constructor() {
        // We need to define super() at the beginning of the
        // constructor to have access to 'this'
        super();

        // Here we initialize our local state as an object
        this.state = {
            name: 'Carlos'
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({
                name: 'May'
            });
        }, 2000);
    }

  render() {


    return (
        <div className="App">
            <p>
                In this recipe you will learn how to add styles to
                components. If you want to learn more you can visit
                our Youtube Channel at
                <a href="http://youtube.com/codejobs">Codejobs</a>.
            </p>
            <p>
                <button
                    style={{
                        backgroundColor: 'gray',
                        border: '1px solid black'
                    }}
                >
                    Click me!
                </button>
            </p>

            <p>Hi my name is {this.state.name}</p>



        </div>
    );
  }
}
