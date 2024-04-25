// https://on.cypress.io/api

describe('App Test', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('Counter', () => {
    const counter = 'counter__val'
    const incBtn = 'counter__inc-btn'
    const decBtn = 'counter__dec-btn'
    it('should have initial value 0', () => {
      // Assert
      cy.getById(counter).should('have.text', '0')
    })

    it('can increment value', () => {
      // Act
      cy.getById(incBtn).click()

      // Assert
      cy.getById(counter).should('have.text', '1')
    })

    it('can decrement value', () => {
      // Act
      cy.getById(decBtn).click()

      // Assert
      cy.getById(counter).should('have.text', '-1')
    })
  })
})
