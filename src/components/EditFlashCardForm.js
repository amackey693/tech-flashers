import React from "react";
import { useFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types'
import ReusableForm from './ReusableForm';


function EditFlashCardForm(props) {
  const firestore = useFirestore();
  const { card } = props;

  function handleEditCardFormSubmission(event){
    event.preventDefault();
    props.onClickingEdit();
    const propertiesToUpdate = {
      title: event.target.title.value,
      definition: event.target.definition.value,
      type: event.target.type.value,
      difficulty: event.target.difficulty.value,
      language: event.target.language.value    
    }
    return firestore.update({collection: 'cards', doc: card.id}, propertiesToUpdate)
  }

  return (
    <React.Fragment>
      <h2>Update card:</h2>
      <ReusableForm
       formSubmissionHandler = {handleEditCardFormSubmission}
       buttonText = "Update Flash Card"/>
     
    </React.Fragment>
  );
}

EditFlashCardForm.propTypes = {
  onClickingEdit: PropTypes.func
}

export default EditFlashCardForm;