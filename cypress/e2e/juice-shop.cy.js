import { BasketPage } from '../pageObjects/basketPage';
import { CreateAddressPage } from '../pageObjects/createAddressPage';
import { DeliveryMethodPage } from '../pageObjects/deliveryMethodPage';
import { HomePage } from '../pageObjects/HomePage';
import { LoginPage } from '../pageObjects/loginPage';
import { OrderCompletionPage } from '../pageObjects/orderCompletionPage';
import { OrderSummaryPage } from '../pageObjects/orderSummaryPage';
import { PaymentOptionsPage } from '../pageObjects/paymentOptionsPage';
import { RegistrationPage } from '../pageObjects/registrationPage';
import { SavedAddressesPage } from '../pageObjects/savedAddressesPage';
import { SelectAddressPage } from '../pageObjects/selectAddressPage';

describe('Juice-shop scenarios', () => {
  context('Without auto login', () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it('Login', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type('demo');
      // Set password value to "demo"
      LoginPage.passwordField.type('demo');
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');
    });

    it('Registration', () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerLink.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const randomNumber = Math.floor(Math.random() * 10000);
      const email = `email_${randomNumber}@inbox.com`;
      RegistrationPage.emailField.type(email);
      const password = 'password123';
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.securityQuestionDropdown.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.securityQuestionOptions
        .contains('Name of your favorite pet?')
        .click();
      // Fill in answer
      RegistrationPage.answerField.type('Jack Sparrow');
      // Click Register button
      RegistrationPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email);
    });
  });

  context('With auto login', () => {
    beforeEach(() => {
      cy.login('demo', 'demo');
      HomePage.visit();
    });

    it('Search and validate Lemon', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchField.type('Lemon{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productBoxInfo.should(
        'contain.text',
        'Sour but full of vitamins.'
      );
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it('Search 500ml and validate Lemon, while having multiple cards', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type('500ml{enter}');
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productBoxInfo.should(
        'contain.text',
        'Sour but full of vitamins.'
      );
    });

    // Create scenario - Search 500ml and validate cards
    it('Search 500ml and validate cards', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchField.type('500ml{enter}');
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productNames.contains('Eggfruit Juice (500ml)').click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productBoxInfo.should(
        'contain.text',
        'Now with even more exotic flavour.'
      );
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productNames.contains('Lemon Juice (500ml)').click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productBoxInfo.should(
        'contain.text',
        'Sour but full of vitamins.'
      );
      // Close the card
      HomePage.closeButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productNames.contains('Strawberry Juice (500ml)').click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productBoxInfo.should('contain.text', 'Sweet & tasty!');
    });

    // Create scenario - Read a review
    it('Read a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchField.type('King{enter}');
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productNames
        .contains('OWASP Juice Shop "King of the Hill" Facemask')
        .click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReviews.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.reviewBoxInfo.should(
        'contain.text',
        'K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!'
      );
    });

    // Create scenario - Add a review
    it('Add a review', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchField.type('Raspberry{enter}');
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productNames.contains('Raspberry Juice (1000ml)').click();
      // Type in review - "Tastes like metal"
      HomePage.reviewField.type('Tastes like metal');
      // Click Submit
      HomePage.submitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.expandReviews.click();
      // Validate review -  "Tastes like metal"
      HomePage.reviewBoxInfo.should('contain.text', 'Tastes like metal');
    });

    // Create scenario - Validate product card amount
    it('Validate product card amount', () => {
      // Validate that the default amount of cards is 12
      HomePage.cardAmount.should('have.length', 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPage.click();
      HomePage.itemsPerPageDropdown.contains('24').click();
      // Validate that the amount of cards is 24
      HomePage.cardAmount.should('have.length', 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPage.click();
      HomePage.itemsPerPageDropdown.contains('36').click();
      // Validate that the amount of cards is 36
      HomePage.cardAmount.should('have.length', 36);
    });

    // Create scenario - Buy Girlie T-shirt
    it('Buy Girlie T-shirt', () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchField.type('Girlie{enter}');
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.yourBasketButton.click();
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.checkoutBoxInfo.should(
        'contain.text',
        'United Fakedom'
      );
      SelectAddressPage.addressButton.click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryBoxInfo.should(
        'contain.text',
        'Standard Delivery'
      );
      DeliveryMethodPage.deliveryButton.click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.paymentBoxInfo.should('contain.text', '5678');
      PaymentOptionsPage.paymentButton.click();
      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.placeYourOrderAndPayButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"
      OrderCompletionPage.orderCompletionBoxInfo.should(
        'contain.text',
        'Thank you for your purchase!'
      );
    });

    // Create scenario - Add address
    it('Add address', () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.ordersAndPaymentButton.click();
      // Click on My saved addresses
      HomePage.mySavedAddressButton.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.addNewAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      CreateAddressPage.countryField.type('United Fakedom');
      CreateAddressPage.nameField.type('Alice Wonderland');
      CreateAddressPage.mobileNumberField.type('09876567890');
      CreateAddressPage.zipcodeField.type('12321');
      CreateAddressPage.addressField.type('Rabbit street 347');
      CreateAddressPage.cityField.type('Mocktown');
      CreateAddressPage.stateField.type('Testilvania');
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      CreateAddressPage.mySavedAddressesBoxInfo.should(
        "contain.text",
        'Alice Wonderland'
      );
    });

    // Create scenario - Add payment option
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
  });
});
