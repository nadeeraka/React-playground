import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: []
    };
    this.handelReset = this.handelReset.bind(this);
    this.handelOptions = this.handelOptions.bind(this);
    this.handelAddOption = this.handelAddOption.bind(this);
    this.handelDeleteOption = this.handelDeleteOption.bind(this);
  }
  componentDidMount()
  {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (options) {
        this.setState(() => ({ options }));
      }    
    } catch (error) {
      console.log('errors found',error);
    }
    
  }
  componentDidUpdate(pp,ps)
  {
    if(ps.options.length !== this.state.options)
    {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options",json);
    }
  }
  handelReset() {
    this.setState(() => ({ options: [] }));
  }
  handelOptions() {
    let optionsArray = this.state.options;
    let index = Math.floor(Math.random() * optionsArray.length);
    alert(optionsArray[index]);
  }
  handelDeleteOption(value)
  {
    this.setState((ps)=>
  {
    return{options:ps.options.filter((options)=>
      {
        return value !== options;
      })}
  })
  }
  handelAddOption(value) {
    if (!value) {
      return "invalid! Enter valid value ";
    } else if (this.state.options.indexOf(value) > -1) {
      return "don't use same value";
    }
    this.setState(ps => {
      return { options: ps.options.concat(value) };
    });
  }
  render() {
    const title = "Indecition";
    const sub = "Get your dection fast";

    return (
      <div>
        <Header title={title} sub={sub} />
        <Action
          opArray={this.state.options}
          handelOptions={this.handelOptions}
        />
        <AddOption handelAddOption={this.handelAddOption} />
        <Options opArray={this.state.options}
        handelReset={this.handelReset} 
        handelDeleteOption={this.handelDeleteOption}
        />
      </div>
    );
  }
}

const Header = (props)=> {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.sub}</h2>
    </div>
  );
};
// Header.defultProps = { title: 'Indecition' };
const Action = props => {
  return (
    <div>
      <button
        disabled={!props.opArray.length > 0}
        onClick={props.handelOptions}
      >
        What shoud i do
      </button>
    </div>
  );
};

class AddOption extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null
    };
    this.handelAddOption = this.handelAddOption.bind(this);
  }
  handelAddOption(e) {
    e.preventDefault();
    let value = e.target.elements.data.value.trim();
    let error = this.props.handelAddOption(value);
    if (error) {
      this.setState(() => ({ error }));
    }
    if (!error) {
      e.target.elements.data.value ='';
    }
  }
  render() {
    return (
      <div>
        <p>{this.state.error}</p>
        <form onSubmit={this.handelAddOption}>
          <input type="text" name="data" />
          <button>Add option</button>
        </form>
        <SingleOption />
      </div>
    );
  }
}
const Options =(props)=>
 {

    return (
      <div>
      <p>{props.opArray.length === 0 &&'please Add item'}</p>
        {props.opArray.map(elamants => (
          <SingleOption key={elamants} textValue={elamants} 
         handelDeleteOption={props.handelDeleteOption}
          />
        ))}
        <button onClick={props.handelReset}>Reset All</button>
      </div>
    );
  }


const SingleOption = props => {
  return (
    <div>
          
        {props.textValue} <button onClick={(e)=>
        {
          props.handelDeleteOption(props.textValue);
        }}>
        Remove</button>
      
    </div>
  );
};


export default App;
