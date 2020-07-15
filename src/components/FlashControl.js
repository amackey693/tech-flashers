import React from 'react';
import LandingPage from "./LandingPage";
import FlashCardList from './FlashCardList';
import FlashCardDetail from './FlashCardDetail';
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
    this.setState({selectedCard: null})
  }

  seeFormButtonClick = () => {
    const {dispatch} = this.props;
    const action = a.seeForm();
    dispatch(action);
  }

  seeListButtonClick = () => {
    const {dispatch} = this.props;
    const action = a.seeList();
    dispatch(action);
    this.setState({ selectedCard: null })
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
      console.log("flash control selectedCard:", this.state.selectedCard)
      console.log("flash control firestoreCard:",firestoreCard)
    })
  }

  handleDeletingCard = (id) => {
    this.props.firestore.delete({collection: 'cards', doc:id});
    this.setState({selectedCard: null})
  }

  render() {
    let currentView = null;
    let button1 = null;
    let button2 = null;

    if (this.state.selectedCard != null) {
      currentView = <FlashCardDetail
        card = {this.state.selectedCard}
        onClickingDelete ={this.handleDeletingCard}
      />
      button1 = <div class="form-group"> <button className="btn btn-dark" onClick={this.landingPageButtonClick}>Return Home</button> </div>
  
      button2 = <button className="btn btn-dark" onClick={this.seeListButtonClick}>Return To Flashcards</button>
    } else if (this.props.formVisibleOnPage === 'landing-page') {
      currentView = <LandingPage/>
      button1 = <div class="form-group"> <button className="btn btn-dark" onClick = {this.seeFormButtonClick}>Add Flash Card!</button> </div>
      button2 = <button className="btn btn-dark" onClick = {this.seeListButtonClick}>See all Flashcards</button>

    } else if (this.props.formVisibleOnPage === 'see-form') {
      currentView = <NewFlashCardForm
      onNewCardCreation = {this.handleAddingNewCardToList}/>
      button1 = <div class="form-group"> <button className="btn btn-dark" onClick = {this.landingPageButtonClick}>Return Home</button> </div>
      button2 = <button className="btn btn-dark" onClick = {this.seeListButtonClick}>Return To Flashcards</button>

    } else if (this.props.formVisibleOnPage === 'see-list') {
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
