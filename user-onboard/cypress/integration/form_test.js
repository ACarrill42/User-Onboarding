describe("Friend App", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  const textInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");
  const submitButton = () => cy.get("#submitBtn");
  const checkBox = () => cy.get('[type="checkbox"]');

  it("Can type name", () => { //only shows part of sentence
    textInput()
      .should("have.value", "")
      .type("Austin")
      .should("have.value", "Austin")
  })

  it("Can type email" , () => { //only shows part of sentence
    emailInput()
      .should("have.value" , "")
      .type("random")
      .should("have.value", "random")
  })

  it("Can type password", () => {
    passwordInput()
      .should("have.value", "")
      .type("passwords")
      .should("have.value", "passwords")
  })

  it("Can check box", () => {
    checkBox()
      .check()
  })

  it("Submit button is enabled", () => {
    textInput()
      .type("Austin")
    emailInput()
      .type("email")
    passwordInput()
      .type("password")  
    submitButton()
      .should("be.enabled")  
  })

})