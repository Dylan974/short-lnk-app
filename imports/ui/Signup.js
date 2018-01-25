import React from 'react';
import { Link } from 'react-router';

import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
  constructor(props){
    super(props);
    // this.state = {
    //   count: this.props.count || 0
    // };

    this.state = {
      error: ''
    };
  }

  // increment(){
  //   this.setState({
  //     count: this.state.count + 1
  //   });
  // }

  onSubmit(e) {
    e.preventDefault();

    let email = this.refs.email.value.trim();
    let password = this.refs.password.trim();
    Accounts.createUser({email, password}, (err) => {
      console.log('Signup callback', err);
    });

    // this.setState({
    //   error: 'something went wrong.'
    // });
  }

  render() {
    return (
      <div>
        <h1>Join Short Lnk</h1>

        {this.state.error ? <p>{this.state.error}</p> : undefined}

        <form onSubmit={this.onSubmit.bind(this)}>
          <input type='email' ref='email' name='email' placeholder='Email'/>
          <input type='password' ref='password' name='password' placeholder='password'/>
          <button>Create Account</button>
        </form>

{/* 
        <p>{this.state.count}</p>

        <button onClick={() => {
          this.setState({count: this.state.count - 1})
        }}>-1</button>
        <button onClick={this.increment.bind(this)}>+1</button> 
*/}

        <Link to="/">Already have a account?</Link>
      </div>
    );
  }
}