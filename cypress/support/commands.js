import apikey from '../../src/helpers/apikey'


Cypress.Commands.add("reqUrl", () => { 
  cy.request(
    `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=https://www.bbc.co.uk/&key=${apikey()}`)    
})
