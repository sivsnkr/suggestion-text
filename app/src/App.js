import React, { Component } from 'react';
import makegood from './makegood';

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

  onChange = (e)=>{
    this.setState({[e.target.name]:e.target.value});
    let words = Words.filter(word=>{
      word.indexOf(this.state.textV)>0;
    })
    this.setState({words});
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
        {this.state.show&&
          this.state.words.map((word,index)=>{
            <makegood 
              key={index}
              word={word}
            />
          })
        }
        <button type="submit">Submit</button>
      </div>
    );
  }
}

export default App;
