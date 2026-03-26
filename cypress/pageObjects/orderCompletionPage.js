import { BasePage } from '../pageObjects/basePage';

export class OrderCompletionPage extends BasePage {
  static get orderCompletionBoxInfo() {
    return cy.get('h1[class="confirmation"]');
  }
}
