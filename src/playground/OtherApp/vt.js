import React, { Component } from "react";

class VtApp extends Component {
    render()
     {
         let massage = 'this is not a jok';
        return (
            <div>
                <h1>Secret App</h1>
                <Logic massage={massage} />
            </div>
        )
    }
}
class Logic extends Component {
    constructor(props) {
        super(props);
        this.state ={
            value:false
        }
        this.plus = this.plus.bind(this);
    }
    plus() 
    {
         this.setState((ps) => {
         return { value: !ps.value }
            })
        
        
        }
    render() {
      return (
        <div>
          <button onClick={this.plus}>Show Secret</button>
          <p>{this.state.value ?  this.props.massage : ''}</p>
        </div>
      )
    }
    
}
export default VtApp;