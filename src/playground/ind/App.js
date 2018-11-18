import React, { Component } from 'react'

class App extends Component {
    constructor(props)  {
    super(props);
     this.state = {
    isClick: true,
    todos:[],
    erros:[]
}
this.onClick = this.onClick.bind(this);
this.onData = this.onData.bind(this);
    }
onClick()
{
    this.setState((ps)=>
    {
        return {isClick:!(ps.isClick)}
    });
}
onData(value)
{
    if(!value)
    {
       return this.setState((ps)=>
        {
            let error = 'Opps! add to-do';
            return {erros:ps.erros.concat(error)}
        })
    }
    //type cheack
  else  if (this.state.todos.indexOf(value) > -1)
    {
       return  this.setState((ps)=>
        {
            let error = 'This todo already adaed!';
            return {erros:ps.erros.concat(error)}
        })
    }
    this.setState((ps)=>
    {
        return {todos:ps.todos.concat(value)}
    })

}
    componentDidMount() {
        try {
            const json = localStorage.getItem("todos");
            const todos = JSON.parse(json);
            if (todos) {
                this.setState(() => ({todos  }));
            }
        } catch (error) {
            console.log('errors found', error);
        }

    }
    componentDidUpdate(pp, ps) {
        if (ps.todos.length !== this.state.todos) {
            const json = JSON.stringify(this.state.todos);
            localStorage.setItem("todos", json);
        }
    }
  render() {
    return (
      <div>
       <Header onClick={this.onClick}/>
       <AddTodos onClick={this.state.isClick} onData={this.onData}/>
       <Todos todos={this.state.todos}/>
      </div>
       
    )
  }
}
const Header =(props)=>
    (
        <div>
            <h1>To-Do List <button onClick={props.onClick}>+</button></h1>
        </div>
    )

class AddTodos extends Component {
    constructor(props)
    {
        super(props);
        
        this.onData = this.onData.bind(this);
    }
    onData(e)
    {
        e.preventDefault();
        let value = e.target.elements.data.value.trim();
        if(value)
        {
            this.props.onData(value);
        }
        
    }
    render() {
      return (
        <div>
              <form onSubmit={this.onData}>
                  <input type="text" name="data" hidden={this.props.onClick} placeholder="Add New Todo" />
                  <button hidden={this.props.onClick} >+</button>
              </form>
          
        </div>
      )
    }
}

class Todos extends Component {
  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map((e)=><Element key={e} textValue={e} />)}
        </ul>
      </div>
    )
  }
}

const Element = (props)=>
(
    <div>
    <li>{props.textValue}</li>
    </div>
)
export default App



 