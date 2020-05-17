/// <reference types="cypress" />

import "../support/commands"

describe('website tests', () => {

  beforeEach(() => {
    cy.visit('/')
  })

  it('opens menu correctly', () => {
    cy.get('#buttonwrapper').click()
    cy.get('div.navigation__close').click()
  })

  it('returns success when correct input is given', () => {

    cy.get('input#urlinput').type('https://www.bbc.co.uk/')

    cy.get('.inputbutton__wrapper')
      .should('contain', 'Get report')
      .click()
      .should('contain', 'Loading...')
    cy.reqUrl()
    cy.get('.inputbutton__wrapper').should('contain', 'Get new report')
  })

  it('it returns error when wrong input is given', () => {
    cy.get('input#urlinput')
      .type('www.bbc.co.uk/')

    cy.get('.inputbutton__wrapper')
      .should('contain', 'Get report')
      .click()
      .should('contain', 'Oops')
  })

  it('it returns error when no input is given', () => {
    cy.get('.inputbutton__wrapper')
      .should('contain', 'Get report')
      .click()
      .should('contain', 'Oops')
  })

})