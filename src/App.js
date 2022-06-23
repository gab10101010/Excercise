
import React from "react";
import convertToRoman from "./convertToRoman";


import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      output: "",
      value1: 0,
      value2: 0,
      show : '',
      operator: null,
      clear: false
    };
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    if(this.state.clear){
      this.setState({show:'',clear: false});
      return;
    }
    if(this.state.operator ==null){
    this.setState({
      value1: parseInt(this.state.value1 +""+ e.target.innerText),
      show: this.state.show +""+e.target.innerText
    });
    }
    else if (this.state.operator !== null && this.state.operator !=='='){
      this.setState({
        value2: parseInt(this.state.value2 +""+ e.target.innerText),
        show: this.state.show +""+e.target.innerText
      });
    }
    
  }
  handleOperator(e) {
    if(e.target.innerText === 'C'){
      this.setState({
        output: "",
        value1: 0,
        value2: 0,
        show: convertToRoman(parseInt(this.state.show)),
        operator: null,
        clear: true
      })
      return;
    }
    if(this.state.clear){
      this.setState({show:'',clear: false});
      return;
    }
    if(e.target.innerText === '='){
      var answer=0;
      switch(this.state.operator){
        case '+': 
          answer = this.state.value1 + this.state.value2;
        break;
        case '-':
          answer = this.state.value1 - this.state.value2;
        break;
        case '/':
          answer = this.state.value1 / this.state.value2;
        break;
        case '*':
          answer = this.state.value1 * this.state.value2;
        break;
        default: answer =0; break;
      }
      this.setState({
        output: "",
        value1: 0,
        value2: 0,
        show: answer,
        operator: null,
        clear: true
      })
    }else if(this.state.operator === 'c'){

    }
    else {
    this.setState({
      operator: e.target.innerText,
      show: this.state.show +""+e.target.innerText
    });
  }
  }

  render() {
    return (
      <div className="container">
      <input
      className="input"
      value = {this.state.show}
      onChange={this.handleInput}

    />
      <div className = "itemTotal" onClick={this.handleOperator.bind(this)}>=</div>
      <div className = "row2" >
      <div className = "item" onClick={this.handleInput}>7</div>
      <div className = "item" onClick={this.handleInput}>8</div>
      <div className = "item" onClick={this.handleInput}>9</div>
  </div>
      <div className = "item row2d" onClick={this.handleOperator.bind(this)}>+</div>
      <div className="row3" >
      <div className = "item" onClick={this.handleInput}>4</div>
      <div className = "item" onClick={this.handleInput}>5</div>
      <div className = "item" onClick={this.handleInput}>6</div>
  </div>
      <div className = "item row3d" onClick={this.handleOperator.bind(this)}>-</div>
      <div className="row4" >
      <div className = "item" onClick={this.handleInput}>1</div>
      <div className = "item" onClick={this.handleInput}>2</div>
      <div className = "item" onClick={this.handleInput}>3</div>
  </div>
      <div className = "item row4d" onClick={this.handleOperator.bind(this)}>*</div>
      <div className="row5" >
      <div className = "item" onClick={this.handleOperator.bind(this)}>C</div>
      <div className = "item" onClick={this.handleInput}>0</div>
      <div className = "item" onClick={this.handleInput}>.</div>
      </div>
      <div className = "item row5d" onClick={this.handleOperator.bind(this)}>/</div>
  </div>
    );
  }
}
export default App;
