export class MobilePhoneReplenishment {

    typePhoneNumber(phoneNumber) {
        cy.get('[data-qa-node="phone-number"]')
            .type(phoneNumber)
    }

    typeFirstNameDebitSource(firstNameDebitSource) {
        cy.get('[data-qa-node="firstNamedebitSource"]')
            .type(firstNameDebitSource)
    }

    typeLastNameDebitSource(lastNameDebitSource) {
        cy.get('[data-qa-node="lastNamedebitSource"]')
            .type(lastNameDebitSource)
    }

    checkDebitCard(debitCard) {
        cy.get('[data-qa-node="card"]')
            .should('have.text', debitCard)
    }

    checkDebitAmount(debitAmount) {
        cy.get('[data-qa-node="amount"]')
            .should('contain.text', debitAmount)
    }

    checkDebitCurrency(debitCurrency) {
        cy.get('[data-qa-node="currency"]')
            .eq(0)
            .should('contain.text', debitCurrency)
    }

    checkDebitAmountAndComission(debitComission) {
        cy.get('[data-qa-node="commission"]')
            .eq(1)
            .should('contain.text', debitComission)
    }

    checkComissionCurrency(comissionCurrency) {
        cy.get('[data-qa-node="commission-currency"]')
            .should('contain.text', comissionCurrency)
    }

}

export const mobileReplenishment = new MobilePhoneReplenishment()