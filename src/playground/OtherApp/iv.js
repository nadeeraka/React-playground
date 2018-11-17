import React, { Component } from 'react'

class IvApp extends Component 
{
    constructor(props)
    {
        super(props);
        this.state ={
            name: '',
            email : '',
            password:''
        }
        
        this.onChange = this.onChange.bind(this);
    }
   onChange(e)
   {
       
   }
  render() {
    return (
      <div>
        <h1>Input Validator</h1>
        <DataForm onChange={this.onChange} />
      </div>
    )
  }
}
 class DataForm extends Component {
     constructor(props)
     {
        super(props); 
         this.state = {
             error: [],
             numError: false
         }
        this.onName = this.onName.bind(this);
      
        
     }componentDidCatch
     onName(e)
     {
         e.preventDefault();
         let name = e.target.elements.name.value.trim();
         let email = e.target.elements.email.value.trim();
         let password = e.target.elements.password.value.trim();
         let Cpassword = e.target.elements.cpassword.value.trim();
         
         
         if(! (name,email,password,Cpassword))
         {
             this.setState((ps)=>
             {
              let  error = 'Hay this is empty'
                 return{error:ps.error.concat(error)}
             })
         }
         if(name.length<2)
            {
             this.setState((ps) => {
                 let error = 'Full name please!'
                 return { error: ps.error.concat(error) }
             })
             
            }
         if (email.length <10 ) {
             this.setState((ps) => {
                 let error = 'It lok like invalid email!'
                 return { error: ps.error.concat(error) }
             })
 
         } 
         if (!password === Cpassword) {
           this.setState(ps => {
             let error = "Ops! passwords not match";
             return { error: ps.error.concat(error) };
           });
         }
         if (password.length < 4) {
             this.setState((ps) => {
                 let error = 'Hmm password too short!'
                 return { error: ps.error.concat(error) }
             })

         }
         
     }
     
     
  render() {
      
    return (
        
      <div>
      <p> {this.state.error.length>0 && 'Errors found'}</p>
      
            <ul>
      {this.state.error.map((e)=><li key={e}>{e}</li>)}
      </ul>
            <form onSubmit={this.onName}>
        <input type='text' name="name" placeholder="User Name"  />
                <input type='email' name="email" placeholder="Email" />
                <input type='password' name="password" placeholder="Password" />
        <input type='password' name="cpassword" placeholder="Password"/>
                <button >Submit</button>
        </form>
      </div>
    )
  }
}

export default IvApp;
