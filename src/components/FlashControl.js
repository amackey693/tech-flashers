import React from 'react';
import LandingPage from "./LandingPage";
import NewFlashCardForm from "./NewFlashCardForm"
import { connect } from 'react-redux';
import * as a from './../actions';

class FlashControl extends React.Component {

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

  render() {
    let currentView = null;
    let button1 = null;
    let button2 = null;

    if (this.props.formVisibleOnPage === 'landing-page') {
      currentView = <LandingPage/>
      button1 = <button class="btn btn-dark" onClick = {this.seeFormButtonClick}>Add Flash Card!</button>

    } else if (this.props.formVisibleOnPage === 'see-form') {
      currentView = <NewFlashCardForm/>
      button1 = <button class="btn btn-dark" onClick = {this.landingPageButtonClick}>Return Home</button>
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

export default FlashControl; 
