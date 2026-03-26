import { BasePage } from '../pageObjects/basePage';

export class SavedPaymentMethodsPage extends BasePage {
  static get addNewCardButton() {
    return cy.get('[class="mat-expansion-panel-header-title"]');
  }

  static get nameField(){
    return cy.get("[role='region'] input").eq(0);
  }

  static get cardNumberField(){
    return cy.get("[role='region'] input").eq(1);
  }
}
