import React from "react";
import PropTypes from "prop-types";

function FlashCardDetail(props) {
  const detailStyles = {
    backgroundColor: 'white',
    border: 'solid 1pt #9673A6',
    textAlign: "center",
    borderRadius: "8px",
    margin: "20px",
    padding: "15px",
  }
  const { title, definition, userID, type, difficulty, language } = props;
  return (
    <React.Fragment>
    <div class='row'>
      <div className="col-md-4"></div>
        <div className="col-md-4">
          <em><p>{card.definition}</p></em>
          {/* <b><h4>{card.type}</h4></b>
          <h4>{card.difficulty}</h4>
          <h4>{card.language}</h4> */}
          <hr/>
          {/* <button class= "btn btn-info"onClick={() => onClickingEdit(card.id)}>Update Flash Card</button> */}
          <br/>
          {/* <button class="btn btn-danger" onClick={() => onClickingDelete(card.id)}>Update card</button> */}
        </div>
        <div className="col-md-4"></div>
    </div>
    </React.Fragment>
  );
}

FlashCardDetail.propTypes = {
  card: PropTypes.object,
  onClickingDelete: PropTypes.func,
  // onClickingEdit: PropTypes.func
}

export default FlashCardDetail;



// title
// definition
// userID
// type
// difficulty
// language