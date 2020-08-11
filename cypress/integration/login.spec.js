describe('login user', () => {
  beforeEach(() => {
    cy.visit('/login')
  })

  it('should successfully login a registered user', () => {
    cy.get('[data-testid=loginButton]').should('be.disabled')
    cy.get('[name=email]').type('cypresstester@testmail.de')
    cy.get('[name=password]').type('1234567')
    cy.get('[data-testid=loginButton]').click()
    cy.location('pathname').should('include', 'home')
  })

  it('should show error message if password is not correct', () => {
    cy.get('[name=email]').type('cypresstester@testmail.de')
    cy.get('[name=password]').type('81234567')
    cy.get('[data-testid=loginButton]').click()
    cy.get('[data-testid=errorMessage]')
      .contains('Deine E-Mail oder dein Passwort ist nicht korrekt')
      .should('be.visible')
  })
})
