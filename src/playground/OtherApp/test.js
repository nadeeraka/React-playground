import React, { Component } from "react";





 class test extends Component {
  render() {
    return (
      <div>
     <h1>Count App</h1>        
     <Logic />
      </div>
    )
  }
  }
  class Logic extends Component
  {
    constructor(props)
    {
      super(props);
      this.state = {
         count:0
      }
      this.plus = this.plus.bind(this);
      this.min = this.min.bind(this);
      this.reset = this.reset.bind(this);
    }
    plus()
    {
      this.setState((prv)=>
      {
        return {count:prv.count+1}
      })
    }
    min()
    {
      if(this.state.count > 0)
      {
        this.setState((prv)=>
        {
          return {count:prv.count-1}
        })
      }

    }
    reset()
    {
        this.setState(()=>({count:0}))
    }
    render() {
      return (
        <div>
        <h1>Count : {this.state.count}</h1>
          <button onClick={this.plus}>+</button>
          <button onClick={this.min}>-</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      )
    }
  }
export default test;