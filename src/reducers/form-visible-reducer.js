import * as c from './../actions/ActionTypes';

export default (state = 'landing-page', action) => {
  switch(action.type) {
    case c.LANDING_PAGE: 
      state = 'landing-page';
      return state;
    case c.SEE_FORM: 
      state = 'see-form';
      return state;
    default: return state;
  }
}
