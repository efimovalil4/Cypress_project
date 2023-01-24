// /// <reference types="Cypress" />
// import { mobileReplenishment } from "../support/pages/mobileReplenishment";
// import { transfers } from "../support/pages/transfers";
// import { basePage } from "../support/pages/basePage";

// it('Replenishment of Ukraine mobile phone number', () => {
//     basePage.open('https://next.privat24.ua/mobile?lang=en');
//     mobileReplenishment.typePhoneNumber('686979712');
//     basePage.typeAmount('1');
//     basePage.typeDebitCardData('4552331448138217', '0524', '111');
//     cy.wait(3000);
//     mobileReplenishment.typeFirstNameDebitSource('IVAN');
//     mobileReplenishment.typeLastNameDebitSource('IVANOV');
//     basePage.submitPayment();
//     mobileReplenishment.checkDebitCard('4552 **** **** 8217');
//     mobileReplenishment.checkDebitAmount('1 201');
//     mobileReplenishment.checkDebitCurrency('UAH');
//     mobileReplenishment.checkDebitAmountAndComission('4');
//     mobileReplenishment.checkComissionCurrency('UAH')
// })

// it('Money transfer between foreign cards', () => {
//     basePage.open('https://next.privat24.ua/money-transfer/card?lang=en');
//     basePage.typeDebitCardData('4552331448138217', '0524', '111');
//     transfers.typeDebitNameAndSurname('Shayne', 'McConnell');
//     transfers.typeReceiverCard('5309233034765085');
//     transfers.typeReceiverNameAndSurname('Juliana', 'Janssen');
//     basePage.typeAmount('400');
//     transfers.typeComment('Cypress test');
//     cy.wait(2000);
//     basePage.submitPayment();
//     transfers.checkDebitAndReceiverCards('4552 3314 4813 8217', '5309 2330 3476 5085');
//     transfers.checkDebitAmountAndTotalAmount('400 UAH', '518.49');
//     transfers.checkDebitComission('118.49 UAH');
//     transfers.checkTotalCurrency('UAH');
//     transfers.checkComment('Cypress test')
// });

it('Example sending the GET request', () => {
    cy.request('https://next.privat24.ua')
        .then((response) => {
            console.log(response);
        });
});

it('Example sending the POST request', () => {

    const requestBody = {
        action: "info",
        phone: "+380686979712",
        amount: 50,
        currency: "UAH",
        cardCvv: "111",
        card: "4552331448138217",
        cardExp: "0526",
        xref: "52eb36558441026076078632f86ca9a4",
        _: 1670869020204,
    };

    const headersData = {
        cookie:
            "_ga=GA1.2.1971827090.1653486950; _gid=GA1.2.179932883.1670868414;pubkey=253e6e83a9fb56ecdb1eba8c11c2fa1a; fp=29; lfp=5 / 25 / 2022, 4: 55: 59 PM;pa=1668451520392.39380.853353968540892next.privat24.ua0.7924588268549682+3",
    };

    cy.request({
        method: 'POST',
        url: 'https://next.privat24.ua/api/p24/pub/mobipay',
        body: requestBody,
        headers: headersData,
    }).then((response) => {
        console.log(response.body);
    });
}); 
