import React, { Component } from 'react';
import C3Chart from 'react-c3js';
import 'c3/c3.css';
import "../../App.css";


//Need to display buildid and status.

export class Query extends Component {

    constructor(props) {
        super(props);
        this.state = { source: '', testId: ''};
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.value });
    }

    render() {
        /*
        const data = {
            columns: [
                ['data1', 30, 200, 100, 400, 150, 250],
                ['data2', 50, 20, 10, 40, 15, 25]
            ],
            type: 'bar'
        };
        */

        const data = {
            columns: [
                ['data1', 30, 200, 200, 400, 150, 250],
                ['data2', 130, 100, 100, 200, 150, 50]
            ],
            type: 'bar',
            groups: [
                ['data1', 'data2']
            ]
        };
        return (
            <div className="App">

                <h2/>
                <form>

                    <label>Source</label>
                    <input type="text" name="source"  onChange={this.handleChange('source')}/>


                    <label>TestId</label>
                    <input type="text" name="testId"  onChange={this.handleChange('testId')}/>

                    <button onClick={this.fetchData} >Fetch</button>


                </form>


                <h2>{this.state.source}</h2>

                <C3Chart data={data} />

            </div>
        );
    }



}

