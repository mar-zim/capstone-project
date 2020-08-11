describe('register a new user', () => {
  beforeEach(() => {
    cy.visit('/login/register')
  })

  it('should successfully create a new user when all fields are filled in', () => {
    cy.get('[data-testid=registerButton]').should('be.disabled')
    cy.get('[name=name]').type('Cypress User')
    cy.get('[data-testid=registerButton]').should('be.disabled')
    cy.get('[name=email]').type('cypress@shhare.de')
    cy.get('[data-testid=registerButton]').should('be.disabled')
    cy.get('[name=password]').type('password123')
    cy.get('[data-testid=registerButton]').should('be.disabled')
    cy.get('[name=passwordcheck]').type('password123')
    cy.get('[data-testid=registerButton]').click()
    cy.get('[data-testid=registerModal]').contains('Du bist jetzt registriert')
    cy.get('[data-testid=modalButton]').click()
    cy.location('pathname').should('include', 'home')
  })

  it('should show error message if email adress is already taken', () => {
    cy.get('[name=name]').type('Cypress User')
    cy.get('[name=email]').type('cypress@shhare.de')
    cy.get('[name=password]').type('password123')
    cy.get('[name=passwordcheck]').type('password123')
    cy.get('[data-testid=registerButton]').click()
    cy.get('[data-testid=errorMessage]')
      .contains('Email Adresse ist leider schon vergeben')
      .should('be.visible')
  })
})
