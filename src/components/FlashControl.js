import React from 'react';
import LandingPage from "./LandingPage";
import FlashCardList from './FlashCardList';
// import FlashCardDetail from './FlashCardDetail';
import NewFlashCardForm from "./NewFlashCardForm";
import { connect } from 'react-redux';
import {withFirestore} from 'react-redux-firebase';
import * as a from './../actions';

// title
// definition
// userID
// type
// difficulty
// language

class FlashControl extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      selectedCard: null
    }
  }

  // For changing state views 'button clicks'
  landingPageButtonClick = () => {
    const {dispatch} = this.props;
    const action = a.seeLandingPage();
    dispatch(action);
  }

  seeFormButtonClick = () => {
    const {dispatch} = this.props;
    const action = a.seeForm();
    dispatch(action);
  }

  // methods 
  handleAddingNewCardToList = () => {
    const {dispatch} = this.props;
    const action = a.seeLandingPage();
    dispatch(action)
  }

  handleChangingSelectedCard = (id) => {
    this.props.firestore.get({collection: 'cards', doc: id}).then((card) => {
      const firestoreCard = {
        title: card.get('title'),
        definition: card.get('definition'),
        userID: card.get('userID'),
        type: card.get('type'),
        difficulty: card.get('difficulty'),
        language: card.get('language'),
        id: card.id
      }
      this.setState({selectedCard: firestoreCard})
    })
  }

  render() {
    let currentView = null;
    let button1 = null;
    let button2 = null;

    if (this.props.formVisibleOnPage === 'landing-page') {
      currentView = <LandingPage/>
      button1 = <button class="btn btn-dark" onClick = {this.seeFormButtonClick}>Add Flash Card!</button>

    } else if (this.props.formVisibleOnPage === 'see-form') {
      currentView = <NewFlashCardForm
      onNewCardCreation = {this.handleAddingNewCardToList}/>
      button1 = <button class="btn btn-dark" onClick = {this.landingPageButtonClick}>Return Home</button>
    // } else if (this.state.selectedCard != null) {
    //   currentView = <FlashCardDetail
    //     card = {this.state.selectedCard}
    //   />
    } else {
      currentView = <FlashCardList
      onFlashCardSelection = {this.handleChangingSelectedCard}
      />
    }

    return(
      <React.Fragment>
        {currentView}
        {button1}
        {button2}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

FlashControl = connect(mapStateToProps)(FlashControl)

export default withFirestore(FlashControl); 
