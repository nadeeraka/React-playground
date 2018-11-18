import React, { Component } from "react";
import OptionModal from "./modal";
import Options from "./option";
import Action from "./action";
import AddOption from "./addOption";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      selected:false,
      selectedValue:''
    };
    this.handelReset = this.handelReset.bind(this);
    this.handelOptions = this.handelOptions.bind(this);
    this.handelAddOption = this.handelAddOption.bind(this);
    this.handelDeleteOption = this.handelDeleteOption.bind(this);
    this.isSelected = this.isSelected.bind(this);
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
    let value =optionsArray[index]
    this.setState(()=>({selected:true}))
    this.setState(()=>({selectedValue:value}))
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
  isSelected()
  {
     this.setState(()=>({selected:false}))
     this.setState(()=>({selectedValue:''}))
  }
  render() {
    const title = "Indecition";
    const sub = "Get your dection fast";

    return <div>
        <Header title={title} sub={sub} />

        <div className="container">
          <Action opArray={this.state.options} handelOptions={this.handelOptions} />
          <AddOption handelAddOption={this.handelAddOption} />
          <Options opArray={this.state.options} handelReset={this.handelReset} handelDeleteOption={this.handelDeleteOption} />
        </div>
        <OptionModal isOpen={this.state.selected} value={this.state.selectedValue} isSelected={this.isSelected} />
      </div>;
  }
}

const Header = (props)=> {
  return <div className="header">
  <div className="container">
      <h1 className="header__title"> {props.title}</h1>
      <h2 className="header__subtitle">{props.sub}</h2>

  </div>
          </div>;
};
export default App;
