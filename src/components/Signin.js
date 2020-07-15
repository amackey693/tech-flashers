import React from "react";
import firebase from "firebase/app";

function Signin(){

  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
      alert("successfully signed up");
    }).catch(function(error) {
      console.log(error.message);
    })
  }
  
  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
      alert("successfully signed in");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  function doSignOut() {
    firebase.auth().signOut().then(function() {
      alert("Successfully signed out!");
    }).catch(function(error) {
      console.log(error.message);
    });
  }
  
  return (
    <React.Fragment>
      <h1>Sign up</h1>
      <div className="form-group">
      <form onSubmit={doSignUp}>
        <div className="form-group">
          <input 
          type="text"
          name="email"
          placeholder="email" />
        </div>
        <div className="form-group">
          <input
          type='password'
          name='password'
          placeholder='Password' />
        </div>
        <div className="form-group">
            <button className="btn btn-dark" type='submit'>Sign up</button>
        </div>
      </form>
      </div>
      
      <h1>Sign in</h1>
      <div className="form-group">
        <form onSubmit={doSignIn}>
          <div className="form-group">
            <input type="text" name="email" placeholder="Email"/>
          </div>
          <div className="form-group">
            <input type="password" name="password" placeholder="Password" />
          </div>
          <div className="form-group">
            <button className="btn btn-dark" type="submit">Sign In</button>
          </div>
        </form>
      </div>

      <h1>Sign Out</h1>
      <button className= "btn btn-dark" onClick={doSignOut}>Sign Out</button>
    </React.Fragment>
  
  )
};

export default Signin;