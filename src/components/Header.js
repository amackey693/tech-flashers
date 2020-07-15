import React  from 'react';
import firebase from '../firebase'
import { Link} from "react-router-dom";


function Header(){
  return (
    <React.Fragment>
      <div>
        <h1>TECH FLASHERS</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to='/'>Home</Link>
          <Link className="navbar-brand" to='/signIn'>Sign In</Link>
          <button onClick={() => firebase.auth().signOut()}> Sign Out</button>
        </nav>
      </div>
    </React.Fragment>
  );
};

//header is equivalent to home


export default Header;