import { BasePage } from '../pageObjects/basePage';

export class DeliveryMethodPage extends BasePage {
  static get deliveryBoxInfo() {
    return cy.get(
      '[class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-Name mat-column-Name ng-star-inserted"]'
    );
  }

  static get deliveryButton() {
    return cy.get('#mat-radio-45-input');
  }

  static get continueButton() {
    return cy.get('button[aria-label="Proceed to delivery method selection"]');
  }
}
