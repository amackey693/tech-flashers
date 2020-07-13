import React from "react";
import ReusableForm from "./ReusableForm"
import { useFirestore } from 'react-redux-firebase';
import PropTypes from 'prop-types'



function NewFlashCardForm(props) {
  const firestore = useFirestore();

  function addCardToFirestore(event) {
    event.preventDefault();
    props.onNewCardCreation();
    return firestore.collection('cards').add({
      title: event.target.title.value,
      definition: event.target.definition.value,
      type: event.target.type.value,
      difficulty: event.target.difficulty.value,
      language: event.target.language.value,
      userId: event.target.userId.value,
      timeOpen: firestore.FieldValue.serverTimestamp()
    }
  );
}
  return (
    <React.Fragment>
      <h1>Add a new flash card!</h1>
      <ReusableForm
      formSubmissionHandler = {addCardToFirestore}
      buttonText = "Add Flash Card"/>
    </React.Fragment>
  );
}

NewFlashCardForm.propTypes = {
  onNewCardCreation: PropTypes.func
}

export default NewFlashCardForm;