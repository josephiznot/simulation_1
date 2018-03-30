import React, { Component } from "react";
import "./App.css";
import Dashboard from "./Components/Dashboard/Dashboard";
import Form from "./Components/Form/Form";
import Header from "./Components/Header/Header";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventoryList: [
        {
          // name: "Dog",
          // price: 2,
          // image: "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg"
        }
      ]
    };
    // this.retreiveData = this.retreiveData.bind(this);
    // this.sendData = this.sendData.bind(this);
    this.makeGetRequest = this.makeGetRequest.bind(this);
  }
  componentDidMount() {
    this.makeGetRequest();
  }
  makeGetRequest() {
    axios.get("http://localhost:3001/api/inventory").then(res => {
      this.setState({ inventoryList: res.data });
    });
  }
  render() {
    console.log(this.state.inventoryList);
    return (
      <div className="App">
        <Header />
        <figcaption>
          <Dashboard inventoryList={this.state.inventoryList} />
          <Form
            // retreiveData={this.retreiveData}
            makeGetRequest={this.makeGetRequest}
          />
        </figcaption>
      </div>
    );
  }
}

export default App;
