import * as c from './../actions/ActionTypes';
import LandingPage from '../components/LandingPage';

export default (state = LandingPage, action) => {
  switch(action.type) {
    case c.LANDING_PAGE: 
      state = 'landing-page';
      return state;
    case c.SEE_FORM: 
      state = 'see-form';
      return state;
    case c.SEE_LIST: 
      state = 'see-list';
      return state;
    default: return state;
  }
}
