import React, { Component } from "react";

export default class FunctionComponent extends Component {
  constructor() {
    super();

    this.state = {
      Amount: 0,
      Reset: 0,
    };
  }

  makeAmount = () => {
    this.setState({
      Amount: this.state.Amount + 1,
    });
  };

  makeReset = () => {
    this.setState({
      Amount: 0, 
      
    });
  };

  render() {
    return (
      <div>
        <p><b>1)</b>{` It Has a Class-Based Component & Besides the Bootstrap`}</p>
        <h2>{`Amount: $${this.state.Amount}`}</h2>

<button type="button" className="btn btn-dark mx-2" onClick={this.makeAmount} >Amount</button>
   <button type="button" className="btn btn-dark mx-2" onClick={this.makeReset} > Reset </button>
      </div>
    );
  }
}
