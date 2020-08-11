describe('add new product', () => {
  it('should successfully add a new product', () => {
    cy.visit('/add')
    cy.get('[data-testid=add-product-button]').should('be.disabled')
    cy.get('[name=name]').type('Test Produkt')
    cy.get('[name=description]').type(
      'Ein wirklich tolles Testprodukt, dass sich wirklich jeder ausleihen sollte.'
    )
    cy.get('[name=dailyRate]').type('5')
    cy.get('[name=weeklyRate]').type('20')
    cy.get('[name=phone]').type('01752974629262')
    cy.get('[name=location]').type('Bahrenfeld')
    cy.get('[name=ownerNotes]').type('Bitte nicht wirklich anrufen!')
    const testImage = 'flamingo.jpg'
    cy.get('[data-testid=image-upload]').attachFile(testImage)
    cy.get('[data-testid=add-product-button]').click()
    cy.get('[data-testid=add-product-modal]').contains('Danke')
    cy.get('[data-testid=modal-button]').click()
    cy.location('pathname').should('include', 'home')
    cy.get('[data-testid=product-header]')
      .contains('Test Produkt')
      .should('be.visible')
  })
})
