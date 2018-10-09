//List.js
//Display the list of source name and build number.
import React, { Component } from 'react';

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";
import "../../App.css";

export class List extends Component {

  render() {
      const data = [{
          source: 'QBO V4 CI'
      },{
           source: 'Payroll Paycheck Calculator CI'
      }]

      const columns = [{
              Header: 'Source',
              accessor: 'source' // String-based value accessors!
          }]


    return (
      <div className="App">
          <ReactTable
              data={data}
              columns={columns}
          />
      </div>
    );
  }


}




