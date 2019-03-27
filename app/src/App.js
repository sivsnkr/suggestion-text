import React, { Component } from 'react';

const Wordes = [
  "flipkart",
  "flow",
  "fly",
  "shiv",
  "shankar"
]

class App extends Component {
  state = {
    textV: "",
  }

  onChange = (e)=>{
    this.setState({[e.target.name]:e.target.value});
  }

  onSubmit = (e)=>{
    e.preventDefault();
    console.log("Submitted");
  }
  render() {
    return (
      <div className="App">
        <input 
          type="text"
          name="textV"
          value={this.state.textV}
        />
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;
