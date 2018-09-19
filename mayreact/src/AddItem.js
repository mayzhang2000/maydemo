import React, { Component } from 'react';
import SkyLight from 'react-skylight';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.state = { status: '' };
  }

  save = (item) => {
    const url = `https://ivli43huag.execute-api.us-west-2.amazonaws.com/production/person`;
    const data = {
      "id": 15,
      "fistName": "may13",
      "lastName": "zhang",
      "age": 12,
      "address": item.product
    };
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data)})
    .then(response => response.toString) 
    .then(responseData => {
      this.setState({status : responseData }); 
    }); 
  }

  
  // Create new shopping item and calls addItem function. 
  // Finally close the modal form
  addItem = () => {
    const item = {product: this.state.product,
     amount: this.state.amount};
    this.props.additem(item);
    this.save(item);
    this.addform.hide();
  }

  

  handleChange = (e) => {
    this.setState({[e.target.name]: e.target.value});
  }
 
  render() {
    return (
      <div>
        <section>
          <button onClick={() => this.addform.show()}>Add
           Item</button>
        </section>
        <SkyLight 
          hideOnOverlayClicked 
          ref={ref => this.addform = ref} 
          title="Add item">
          <input type="text" name="product"
           onChange={this.handleChange} 
           placeholder="product" /><br/>
          <input type="text" name="amount"
           onChange={this.handleChange} 
           placeholder="amount" /><br/>
          <button onClick={this.addItem}>Add</button>
        </SkyLight> 
      </div>
    );
  }
}

export default AddItem;