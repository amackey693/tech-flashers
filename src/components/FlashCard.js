import React from "react";
import { PropTypes } from "prop-types";

// title
// definition
// userID
// type
// difficulty
// language

function FlashCard(props) {
  return (
    <React.Fragment>
      <div  className="card" onClick = {() => props.whenCardClicked(props.id)}>
        <h3>{props.title}</h3>
        <b><h4>{props.type}</h4></b>
        <p>{props.difficulty}</p>
        <p>{props.language}</p>
      </div>
    </React.Fragment>
  );
}

FlashCard.propTypes = {
  title: PropTypes.string.isRequired,
  definition: PropTypes.string.isRequired,
  userID: PropTypes.string,
  type: PropTypes.string,
  difficulty: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
  whenCardClicked: PropTypes.func
};

export default FlashCard;
