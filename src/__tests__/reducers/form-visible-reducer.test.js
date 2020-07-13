import formVisibleReducer from '../../reducers/form-visible-reducer';

describe('formVisbleReducer', ()=> {
  test('Should return default state if no action type is recognized', () => {
    expect(formVisibleReducer('landing-page', {type: null})).toEqual('landing-page');  
  })
  test('Should change form visiblilty state when action type is equal to SEE_FORM', () => {
    expect(formVisibleReducer('landing-page', {type: "SEE_FORM"})).toEqual('see-form')
  })
  test('Should change form visiblilty state when action type is equal to LANDING_PAGE', () => {
    expect(formVisibleReducer('see-form', {type: "LANDING_PAGE"})).toEqual('landing-page')
  })
})