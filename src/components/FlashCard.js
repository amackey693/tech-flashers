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
      <div onClick = {() => props.whenCardClicked(props.id)}>
        <h1>{props.title}</h1>
        <b><h4>{props.type}</h4></b>
        <h4>{props.difficulty}</h4>
        <h4>{props.language}</h4>
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
