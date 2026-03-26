import { BasePage } from '../pageObjects/basePage';

export class CreateAddressPage extends BasePage {
  static get addNewAddressButton() {
    return cy.get('button[aria-label="Add a new address"]');
  }

  static get countryField() {
    return cy.get('input[placeholder="Please provide a country."]');
  }

  static get nameField() {
    return cy.get('input[placeholder="Please provide a name."]');
  }

  static get mobileNumberField() {
    return cy.get('input[placeholder="Please provide a mobile number."]');
  }

  static get zipcodeField() {
    return cy.get('input[placeholder="Please provide a ZIP code."]');
  }

  static get addressField() {
    return cy.get('#address');
  }

  static get cityField() {
    return cy.get('input[placeholder="Please provide a city."]');
  }

  static get stateField() {
    return cy.get('input[placeholder="Please provide a state."]');
  }

  static get submitButton() {
    return cy.get('#submitButton');
  }

  static get mySavedAddressesBoxInfo(){
    return cy.get('[class="mdc-card"]');
  }
}
