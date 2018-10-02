import React, { Component } from 'react';

export class Query extends Component {
  constructor(props) {
    super(props);
    this.state = { queryString: '', nameMapString: '', valueMapString: '' };
  }

  render() {
      return (
          <div>
              <h1>Query.js</h1>


              <section>
                  <h3> queryString: <input type="text" onChange={this.handleChange}/> </h3>
                  <h3> nameMap: <input type="text" onChange={this.handleChange}/> </h3>
                  <h3> valueMap: <input type="text" onChange={this.handleChange}/> </h3>
              </section>

              <form>

                  <label>queryString</label>
                  <input type="text" name="email" />


                  <label>Password</label>
                  <input type="password" name="password" />

              </form>


              <h2>{this.state.queryString}</h2>
          </div>
      );
  }



    handleChange = (e) => {
          this.setState({queryString: e.target.value});
      }
}

