import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { keyword: '', data: [] };
  }

  render() {
    const tableRows = this.state.data.map((item, index) => 
    <tr key={index}><td>{item.full_name}</td>
    <td><a href={item.html_url}>{item.html_url}</a></td></tr>); 

    return (
      <div className="App">

        <input type="text" onChange={this.handleChange} />
        <button onClick={this.fetchData} value={this.state.keyword} >Fetch</button>
        <table><tbody>{tableRows}</tbody></table>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  handleChange = (e) => {
    this.setState({keyword: e.target.value});
  }

  fetchData = () => {
    const url = `https://api.github.com/search/repositories?q=${this.state.keyword}`;
    fetch(url)
    .then(response => response.json()) 
    .then(responseData => {
      this.setState({data : responseData.items }); 
    }); 
  }
}



export default App;
