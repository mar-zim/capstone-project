describe('navigation test', () => {
  it('should successfully click thruough the different pages', () => {
    cy.visit('/home')
    cy.get('[data-testid=add-products-link]').click()
    cy.url().should('include', '/add')
    cy.get('[data-testid=home-link]').click()
    cy.url().should('include', '/home')
    cy.get('[data-testid=login-link]').click()
    cy.url().should('include', '/login')
  })
})
