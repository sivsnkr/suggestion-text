import React, { Component } from 'react';
//import Makegood from './makegood';
import App1 from "./normalDownshift";
const Words = [
  "flipkart",
  "flow",
  "fly",
  "shiv",
  "shankar"
]

class App extends Component {
  state = {
    textV: "",
    show:false,
    words:[],
  }

  handleChange = (e)=>{
    this.setState({[e.target.name]:e.target.value});
    let words = Words.filter(word=>{
      return word.indexOf(this.state.textV)>0;
    })
    this.setState({words,show: true});
  }

  onSubmit = (e)=>{
    e.preventDefault();
    console.log("Submitted");
  }
  render() {
    // let wordArr = this.state.words.map((word,index)=>{
    //   return <Makegood 
    //     key={index}
    //     word={word}
    //   />
    // });

    return (
      <div className="App">
        {/* <input 
          type="text"
          onChange={this.handleChange}
          name="textV"
          value={this.state.textV}
        />
        {this.state.show&&
          <div>{wordArr}</div>
        }
        <button type="submit">Submit</button> */}
        <App1/>
      </div>
    );
  }
}

export default App;
