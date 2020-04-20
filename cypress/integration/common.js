describe('website tests', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })
  it('opens menu correctly', () => {
    cy.get('#buttonwrapper').click()
    cy.get('.navigation__close').click()
  })
})