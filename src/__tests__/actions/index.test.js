import * as actions from "./../actions";

describe("flash card actions", () => {
  it ("seeLandingPage should create a LANDING_PAGE action", () => {
    expect(actions.seeLandingPage()).toEqual({
      type: 'LANDING_PAGE'
    })
  })
})

