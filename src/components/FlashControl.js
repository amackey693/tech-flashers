import React from 'react';
import LandingPage from "./LandingPage";
import FlashCardList from './FlashCardList';
import FlashCardDetail from './FlashCardDetail';
import EditFlashCardForm from './EditFlashCardForm';
import NewFlashCardForm from "./NewFlashCardForm";
import { connect } from 'react-redux';
import {withFirestore, isLoaded} from 'react-redux-firebase';
import * as a from './../actions';
// import firebase from "firebase/app";


class FlashControl extends React.Component {

  constructor(props) {
    super(props); 
    this.state = {
      editing: false,
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
    this.setState({
      editing: false, 
      selectedTicket: null
    })
    const {dispatch} = this.props;
    const action = a.seeList();
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
  handleEditClick = () =>{
    this.setState({editing: true})
  }

  handleEditingCard = () => {
    this.setState({
      editing: false, 
      selectedTicket: null,
      
    })
    const {dispatch} = this.props;
    const action = a.seeList();
    dispatch(action);
  }

  handleDeletingCard = (id) => {
    this.props.firestore.delete({collection: 'cards', doc:id});
    this.setState({selectedCard: null})
  }

  render() {
    // const auth = firebase.auth();
    let currentView = null;
    let button1 = null;
    let button2 = null;
    const auth = this.props.firebase.auth()
    // returns loading...?
    if (!isLoaded(auth)) {
      return (
        <React.Fragment>
          <h1>...loading</h1>
        </React.Fragment>
      )
    }
 
    // // what a signed in user can see
    if ((isLoaded(auth)) && (auth.currentUser != null)) {
      if (this.state.selectedCard != null) {
        currentView = <FlashCardDetail
        card={this.state.selectedCard}
        onClickingDelete={this.handleDeletingCard}
        onClickingEdit={this.handleEditClick} />

        button1 = <div class="form-group"><button className="btn btn-dark" onClick={this.landingPageButtonClick}>Return Home</button></div>

        button2 = <div class="form-group"><button className="btn btn-dark" onClick={this.seeListButtonClick}>Return To Flashcards</button>  </div>
     }    // // returns must be signed in to see this view if user is not logged in
     
    }
    
    if ((isLoaded(auth)) && (auth.currentUser == null)) {
      if (this.state.editing){
        currentView = <EditFlashCardForm card = {this.state.selectedCard} onClickingEdit = {this.handleEditingCard}/>

      } else if (this.props.formVisibleOnPage === 'landing-page') {
        currentView = <LandingPage/>
        button1 = <div class="form-group"><button className="btn btn-dark" onClick={this.seeFormButtonClick}>Add Card</button></div>

        button2 = <div class="form-group"><button className="btn btn-dark" onClick={this.seeListButtonClick}>View Flashcards</button>  </div>

      } else if (this.props.formVisibleOnPage === 'see-form') {
        currentView = <NewFlashCardForm
        onNewCardCreation = {this.handleAddingNewCardToList}/>
        button1 = <div class="form-group"><button className="btn btn-dark" onClick={this.landingPageButtonClick}>Return Home</button></div>
      
        button2 = <div class="form-group"><button className="btn btn-dark" onClick={this.seeListButtonClick}>Return To Flashcards</button>  </div>

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
}

const mapStateToProps = state => {
  return {
    formVisibleOnPage: state.formVisibleOnPage
  }
}

FlashControl = connect(mapStateToProps)(FlashControl)

export default withFirestore(FlashControl); 
