import React, { Component } from 'react';



class App extends Component {
     
  render() {
    const title = 'Indection App';
    const sub  = 'Get your dection fast';
    const opArray =['one','tow','three'];
    return (
      <div>
      <Header title={title} sub={sub} />
      <Action />
      <AddOption />
      <Options opArray={opArray} />
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
   handelButton()
   {
     alert('set');
   }
   render() {
     return (
       <div>
         <button onClick={this.handelButton}>What shoud i do</button>
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
        alert(value);
      }

    }
    render() {
      return (
        <div>
          <form onSubmit={this.handelAddOption}>
          <input type='text'name='data'></input>
          <button onClick={this.handelOptions}>Submit</button>
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
          <p>{this.props.opArray.map((elamants)=> 
            <SingleOption key={elamants} textValue={elamants} /> )}</p>
        </div>;
    }
  }

  class SingleOption extends Component
  {
    render() {
      return (
        <div>
          {this.props.textValue}
        </div>
      )
    }
  }
export default App;
