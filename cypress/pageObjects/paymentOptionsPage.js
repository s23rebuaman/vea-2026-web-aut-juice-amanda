import { BasePage } from '../pageObjects/basePage';

export class PaymentOptionsPage extends BasePage {
  static get paymentBoxInfo() {
    return cy.get(
      '[class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-Number mat-column-Number ng-star-inserted"]'
    );
  }

  static get paymentButton() {
    return cy.get('#mat-radio-46-input');
  }

  static get continueButton() {
    return cy.get('button[aria-label="Proceed to review"]');
  }
}
