import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header';
import FlashControl from './FlashControl'

function App() {
  return (
    <React.Fragment>
        <div class = "container">
          <Header/>
          <FlashControl/>
        </div>
    </React.Fragment>
  );
}

export default App;
