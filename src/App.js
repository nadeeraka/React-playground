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
  }
  handelReset() {
    this.setState(() => ({ options: [] }));
  }
  handelOptions() {
    let optionsArray = this.state.options;
    let index = Math.floor(Math.random() * optionsArray.length);
    alert(optionsArray[index]);
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
    const title = "Indection App";
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
        handelReset={this.handelReset} />
      </div>
    );
  }
}

const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.sub}</h2>
    </div>
  );
};
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
        {props.opArray.map(elamants => (
          <SingleOption key={elamants} textValue={elamants} />
        ))}
        <button onClick={props.handelReset}>Reset All</button>
      </div>
    );
  }


const SingleOption = props => {
  return (
    <div>
      <ul>{props.textValue}</ul>
    </div>
  );
};

export default App;
