import React, { Component } from 'react';



class App extends Component {
    constructor(props)
    {
      super(props);
      this.state ={
        options: ['one', 'tow', 'three']
      }
      this.handelReset = this.handelReset.bind(this);
      this.handelOptions = this.handelOptions.bind(this);
    } 
    handelReset()
    {
      this.setState(()=>({options:[]}));

    }
    handelOptions()
    {
      let optionsArray = this.state.options;
      let index = Math.floor(Math.random()*optionsArray.length);
      alert(optionsArray[index])
    }
  render() {
    const title = 'Indection App';
    const sub  = 'Get your dection fast';
    
    return (
      <div>
      <Header title={title} sub={sub} />
        <Action opArray={this.state.options}
         handelOptions={this.handelOptions}/>
      <AddOption />
      <Options opArray={this.state.options} />
      </div>
    );
  }
}
 class Header extends Component
 {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.sub}</h2>
      </div>
    )
  }
 }
 class Action extends Component
 {
   render() {
     return (
       <div>
         <button disabled={! this.props.opArray.length>0} onClick={this.props.handelOptions}>What shoud i do</button>
       </div>
     )
   }
   
  }
  class AddOption extends Component
  {
    handelOptions()
    {
      alert('set');
    }
    handelAddOption(e)
    {
      e.preventDefault();
      let value = e.target.elements.data.value.trim();
      if(value)
      {
        handelAddOption(value)
      }

    }
    render() {
      return (
        <div>
          <form onSubmit={this.handelAddOption}>
          <input type='text'name='data'></input>
          <button>Add option</button>
          </form>
          <SingleOption />
        </div>
      )
    }
  }
  class Options extends Component
  {
    constructor(props)
    {
      super(props);
      this.handelReset =this.handelReset.bind(this);
    }
    handelReset()
    {
      
    }
    render() {
      return <div>
      <button onClick={this.handelReset}>Reset All</button>   
      Option gose hear
          <li>{this.props.opArray.map((elamants)=>
            <SingleOption key={elamants} textValue={elamants} /> )}</li>
        </div>;
    }
  }

  class SingleOption extends Component
  {
    render() {
      return (
        <div>
        <ul>
          
        </ul>
        </div>
      )
    }
  }
export default App;
