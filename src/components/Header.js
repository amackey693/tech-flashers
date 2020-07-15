import React  from 'react';
import { Link} from "react-router-dom";


function Header(){
  return (
    <React.Fragment>
      <div>
        <h1>TECH FLASHERS</h1>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to='/'>Home</Link>
          <Link className="navbar-brand" to='/signin'>Sign In</Link>
        </nav>
      </div>
    </React.Fragment>
  );
};

export default Header;