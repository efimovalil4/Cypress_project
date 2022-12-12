// /// <reference types="Cypress" />
import { mobileReplenishment } from "../support/pages/mobileReplenishment";
import { transfers } from "../support/pages/transfers";
import { basePage } from "../support/pages/basePage";

it('Replenishment of Ukraine mobile phone number', () => {
    basePage.open('https://next.privat24.ua/mobile?lang=en');
    mobileReplenishment.typePhoneNumber('686979712');
    basePage.typeAmount('1');
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    cy.wait(3000);
    mobileReplenishment.typeFirstNameDebitSource('IVAN');
    mobileReplenishment.typeLastNameDebitSource('IVANOV');
    basePage.submitPayment();
    mobileReplenishment.checkDebitCard('4552 **** **** 8217');
    mobileReplenishment.checkDebitAmount('1 201');
    mobileReplenishment.checkDebitCurrency('UAH');
    mobileReplenishment.checkDebitAmountAndComission('4');
    mobileReplenishment.checkComissionCurrency('UAH')
})

it('Money transfer between foreign cards', () => {
    basePage.open('https://next.privat24.ua/money-transfer/card?lang=en');
    basePage.typeDebitCardData('4552331448138217', '0524', '111');
    transfers.typeDebitNameAndSurname('Shayne', 'McConnell');
    transfers.typeReceiverCard('5309233034765085');
    transfers.typeReceiverNameAndSurname('Juliana', 'Janssen');
    basePage.typeAmount('400');
    transfers.typeComment('Cypress test');
    cy.wait(2000);
    basePage.submitPayment();
    transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085');
    transfers.checkDebitAmountAndTotalAmount('400 UAH', '518.49');
    transfers.checkDebitComission('118.49 UAH');
    transfers.checkTotalCurrency('UAH');
    transfers.checkComment('Cypress test')
});

