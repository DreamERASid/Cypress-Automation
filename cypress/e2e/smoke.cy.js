describe('Smoke Test', () => {
  it('Verify app launch', () => {
    cy.visit('https://www.automationexercise.com/')
    cy.contains('Home').should('be.visible')
  })
})