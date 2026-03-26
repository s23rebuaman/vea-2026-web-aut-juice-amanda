import { BasePage } from '../pageObjects/basePage';

export class SavedPaymentMethodsPage extends BasePage {
  static get addNewCardButton() {
    return cy.get('[class="mat-expansion-panel-header-title"]');
  }

  static get nameField() {
    return cy.get("[role='region'] input").eq(0);
  }

  static get cardNumberField() {
    return cy.get("[role='region'] input").eq(1);
  }

  static get expiryMonthField() {
    return cy.get("[role='region'] select").eq(0);
  }

  static get expiryYearField() {
    return cy.get("[role='region'] select").eq(1);
  }

  static get submitButton() {
    return cy.get('#submitButton');
  }

  static get mySavedPaymentOptionBoxInfo() {
    return cy.get("[role='table']");
  }
}
