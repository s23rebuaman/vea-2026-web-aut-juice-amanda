import { BasePage } from '../pageObjects/basePage';

export class SelectAddressPage extends BasePage {
  static get checkoutBoxInfo() {
    return cy.get(
      '[class="mat-mdc-row mdc-data-table__row cdk-row ng-star-inserted"]'
    );
  }

  static get addressButton() {
    return cy.get("mat-radio-button").eq(0);
  }

  static get continueButton() {
    return cy.get('button[aria-label="Proceed to payment selection"]');
  }
}
