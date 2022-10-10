// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { faker } from "@faker-js/faker";

Cypress.Commands.add("createUser", () => {
  cy.visit("http://localhost:3000/signup");

  cy.get("#username").type(faker.internet.userName());
  cy.get("#email").type(faker.internet.email());
  cy.get("#password").type(faker.internet.password());
  cy.get("#avatarURL").type(faker.internet.avatar());

  cy.intercept("POST", "/signup").as("newUser");
  cy.get("#send-button").click();
  cy.wait("@newUser");

  cy.url().should('equal', 'http://localhost:3000/');
});