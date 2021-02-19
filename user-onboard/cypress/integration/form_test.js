describe("Friend App", () => {

  beforeEach(() => {
    cy.visit("http://localhost:3000")
  })
  const textInput = () => cy.get("input[name=name]");
  const emailInput = () => cy.get("input[name=email]");
  const passwordInput = () => cy.get("input[name=password]");

  it("Can type name", () => { //only shows part of sentence
    textInput()
      .should("have.value", "")
      .type("I have a good name")
      .should("have.value", "I have a good name");
  })

  it("Can type email" , () => { //only shows part of sentence
    emailInput()
      .should("have.value" , "")
      .type("random@gmail.com")
      .should("have.value", "random@gmail.com");
  })

  it("Can type password", () => {
    passwordInput()
      .should("have.value", "")
      .type("password")
      .should("have.value", "password");
  })
})