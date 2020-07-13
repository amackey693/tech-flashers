import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as a from '../../actions'

describe('formVisbleReducer', ()=> {
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer('landing-page', {type: null})).toEqual('landing-page');  
  })
  test('Should change form visiblilty state when action type is equal to SEE_FORM', () => {
    expect(formVisibleReducer('landing-page', a.seeForm())).toEqual('see-form')
  })
  test('Should change form visiblilty state when action type is equal to LANDING_PAGE', () => {
    expect(formVisibleReducer('see-form', a.seeLandingPage())).toEqual('landing-page')
  })
})