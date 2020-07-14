import React from "react";
import FlashCard from './FlashCard';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {useFirestoreConnect, isLoaded, isEmpty} from 'react-redux-firebase';

function FlashCardList(props){
  useFirestoreConnect([
    {collection: 'cards'}
  ]);
  const cards = useSelector(state => state.firestore.ordered.cards);
  console.log("flash card list:", cards)

  if (isLoaded(cards)) {
    return (
      <React.Fragment>
        <div class="row">
          <div class=" col col-md-3" >
          {cards.map((card) => {
            return <FlashCard
              whenCardClicked = {props.onFlashCardSelection}
              title = {card.title}
              definiition = {card.definition}
              userID = {card.userID}
              type = {card.type}
              difficulty = {card.difficulty}
              language = {card.language}
              id = {card.id}
              key = {card.id}
              />
          }
          )}
        </div>
          <div class="row">
          </div>
        </div>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <h3>Loading...</h3>
      </React.Fragment>
    )
  }
}

FlashCardList.propTypes = {
  onFlashCardSelection: PropTypes.func
}

export default FlashCardList;