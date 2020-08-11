describe('search for a product', () => {
  it('should successfully find a product via the searchbar', () => {
    cy.visit('/home')
    cy.get('[data-testid=search-input]').type('Bus')
    cy.get('[data-testid=product-header]').contains('Bus').should('be.visible')
  })
})
