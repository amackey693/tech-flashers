import React from "react";
import PropTypes from "prop-types";
import {isLoaded} from 'react-redux-firebase';
import firebase from "firebase/app";


function FlashCardDetail(props) {
  const detailStyles = {
    backgroundColor: 'white',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px",
    padding: "15px",
  }
  const { card, onClickingDelete, onClickingEdit} = props;

  const auth = firebase.auth();

  if (!isLoaded(auth)) {
    return (
      <React.Fragment>
        <h1>Loading...</h1>
      </React.Fragment>
    )
  }
  if ((isLoaded(auth)) && (auth.currentUser != null)) {
    return (
      <React.Fragment>
      <div class='row'>
        
          <div className="col-md-4">
  
            <em><p>{card.definition}</p></em>
            <b><h4>{card.type}</h4></b>
            <h4>{card.difficulty}</h4>
            <h4>{card.language}</h4>
            <hr/> 
            <div class="form-group"> 
            <button class= "btn btn-info"onClick={() => onClickingEdit(card.id)}>Update Flash Card</button>
            </div>
            <div class="form-group"> 
            <button class="btn btn-danger" onClick={() => onClickingDelete(card.id)}>delete card</button>
            </div>
          </div>
          <div className="col-md-4"></div>
      </div>
    
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
      <div class='row'>
        
          <div className="col-md-4">
  
            <em><p>{card.definition}</p></em>
            <b><h4>{card.type}</h4></b>
            <h4>{card.difficulty}</h4>
            <h4>{card.language}</h4>
            <hr/> 
      
          </div>
          <div className="col-md-4"></div>
      </div>
    
      </React.Fragment>
    );
  }

  
}

FlashCardDetail.propTypes = {
  card: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
  // auth: PropTypes.object
}

export default FlashCardDetail;



// title
// definition
// userID
// type
// difficulty
// language