import { BasePage } from '../pageObjects/basePage';

export class SavedPaymentMethodsPage extends BasePage {
  static get addNewCardButton() {
    return cy.get('[class="mat-expansion-panel-header-title"]');
  }

  static get nameField(){
    return cy.get('input[aria-describedby="mat-mdc-error-28"]');
  }
}
