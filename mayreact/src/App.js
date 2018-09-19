import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import VirtualList from 'react-tiny-virtual-list';
import ReactTable from "react-table";
import 'react-table/react-table.css';
import AddItem from "./AddItem";

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = { keyword: '', data: [], items: [] };
  }

  render() {

    const columns = [{
      Header: 'Name',  // Header of the column  
      accessor: 'full_name' // Value accessor
     }, {
      Header: 'URL',
      accessor: 'html_url',
     }, {
      Header: 'Owner',
      accessor: 'owner.login',
    },
    {
      id: 'button',
      sortable: false,
      filterable: false,
      width: 100,
      accessor: 'full_name',
      Cell: ({value}) => (<button className="btn btn-default btn-link" onClick=                            {() => {this.btnClick(value)}}>Press me</button>)
  }
  ]


    const tableRows = this.state.data.map((item, index) => 
    <tr key={index}><td>{item.full_name}</td>
    <td><a href={item.html_url}>{item.html_url}</a></td></tr>); 

const listItems = this.state.items.map((item, index) => 
<li key={index}>{item.product} {item.amount}</li>)

    return (
      <div className="App">
        <h2>Save Person</h2>
       <AddItem additem={this.addItem}/>
      <ul>{listItems}</ul>


        <input type="text" onChange={this.handleChange} />
        <button onClick={this.fetchData} value={this.state.keyword} >Fetch</button>
        
        <ReactTable
              data={this.state.data}
              columns={columns}
              filterable={true}
            
            />

        <table><tbody>{tableRows}</tbody></table>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }

  addItem = (item) => {
    this.setState({items: [item, ...this.state.items]});
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
