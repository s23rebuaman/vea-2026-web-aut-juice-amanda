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

  static get expiryMonthField(){
    return cy.get('select[class="mat-mdc-form-field-infix"]');
  }

  static get expiryMonthFieldDropdown(){
    return cy.get("[role='option']");
  }

  static get expiryYearField(){
    return cy.get('select[class="mat-mdc-form-field-infix"]');
  }

  static get expiryYearFieldDropdown(){
    return cy.get("[role='option']");
  }

  static get submitButton(){
    return cy.get('');
  }

  static get mySavedPaymentOptionBoxInfo(){
    return cy.get('');
  }
}
