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

  describe('SearchForm', () => {
    const input = 'search-input'
    const btn = 'search-btn'
    const form = 'search-form'

    it('should preset search value', () => {
      // Assert
      cy.getById(input).should('have.value', 'Star Wars')
    })

    it('should clear input after search', () => {
      // Act
      cy.getById(btn).click()

      // Assert
      cy.getById(input).should('have.value', '')
    })
  })

  const selectedCss = 'genre-select__genre--selected'

  describe('GenreSelect', () => {
    it('should select "all" genre initially', () => {
      // Assert
      cy.getById(`genre-all`).should('have.class', selectedCss)
    })

    it('can select genre', () => {
      // Act
      cy.getById('genre-comedy').click()

      // Assert
      cy.getById('genre-all').should('not.have.class', selectedCss)
      cy.getById('genre-comedy').should('have.class', selectedCss)
    })
  })
})
