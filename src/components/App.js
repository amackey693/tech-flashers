import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FlashControl from './FlashControl'
import SignIn from "./SignIn";
import SignUp from './SignUp';
import { BrowserRouter as Router, Route } from "react-router-dom";
import {AuthProvider} from "./Auth";
import PrivateRoute from './PrivateRoute';

function App() {
  return (
   <AuthProvider> 
      <Router>
          <div className = "container">
            <Header/>
              <PrivateRoute exact path='/' component={Header}/>
              {/* changed line 17 from FlashControl to Header - AM */}
              <Route exact path='/SignIn' component={SignIn} />
              <Route exact path='/SignUp' component={SignUp} />
          </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
