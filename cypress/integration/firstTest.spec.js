/// <reference types="Cypress" />

// discibe('Mobile phone replenishment', () => {

//     it('Check min sum', () => {
//         //some test
//     })
// })


//get

// it('By ID', () => {                
//     cy.visit("https://facebook.com/")
//     cy.get('#email')
// });


// it('By Class', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('.DocSearch DocSearch-Button')
// });


// it('By Tag', () => {
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('nav')
// });


// it('By Tag value', () => {       //пойск по значению атрибута
//     cy.visit("https://facebook.com/")
//     cy.get('[name="pass"]')
// });


// it('By Different Tag', () => {   //поиск по различным атрибутам
//     cy.visit("https://facebook.com/")
//     cy.get('[data-testid="open-registration-form-button"][role="button"]')
// });


// it('By Different Types', () => {  //комбинированный поиск
//     cy.visit("https://docs.cypress.io/api/commands/get#Syntax")
//     cy.get('button[type="button"][title="close banner"]')
// });


// it.only('By Contains name', () => {  //поиск элемента у которого класс имеет содержимое
//     cy.visit("https://next.privat24.ua/")
//     cy.get('*[class^="card"]')
// });



//find

it('Using Get with Find and Eq', () => {  
    cy.visit('https://next.privat24.ua/deposit')
    cy.get('tbody').find('div').find('button').eq(0)
});


it.only('Using Get with Find and Eq', () => { 
    cy.viewport(1920, 800) 
    cy.visit('https://docs.cypress.io/api/commands/eq#Syntax')
    cy.get('nav').find('ul').find('li').find('a').eq(0)
});