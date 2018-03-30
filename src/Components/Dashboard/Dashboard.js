import React, { Component } from "react";
import Product from "../Product/Product";

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    let { inventoryList } = this.props;
    console.log(inventoryList);
    let inventoryListMapped = inventoryList.map((e, ind, arr) => {
      return (
        <Product key={ind} name={e.name} price={e.price} image={e.image} />
      );
    });
    return <main>{inventoryListMapped}</main>;
  }
}
export default Dashboard;
