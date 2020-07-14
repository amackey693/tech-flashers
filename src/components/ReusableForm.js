import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return(
    <React.Fragment>
      <div>
        <form onSubmit={props.formSubmissionHandler}>
          <div className="form-group">
            <input
              type="text"
              name="title"
              placeholder="Title"/>
          </div>
          <div className="form-group">
          <textarea
            type="text"
            name="definition"
            placeholder="definition"/>
          </div>
          <div class="form-group">
          <input
            type="text"
            name="type"
            placeholder="type of ex: method term "/>
          </div>
          <div class="form-group">
            <input
              type="text"
              name="difficulty"
              placeholder="difficulty level"/>
          </div>
          <div class="form-group">
            <input
              type="text"
              name="language"
              placeholder="language leave blank if not specific "/>
          </div>
          <div class="form-group">
          <button class="btn btn-success" type='submit'>{props.buttonText}</button>
          </div>
        </form>
        </div>
    </React.Fragment>
  )
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
}

export default ReusableForm;