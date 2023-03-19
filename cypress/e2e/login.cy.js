/// <reference types = "cypress"/>

context('Funcionalidade: Página de Login' , () => {

    beforeEach(() => {
        cy.visit('https://twitter.com/i/flow/login')
    });

    it('Deve efetuar login com sucesso', () => {
        cy.get('.r-mk0yit').type('gitgatinho')
        cy.get('[style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"]').click()
        cy.get('.r-mk0yit.r-13qz1uu > .r-mk0yit').type('teste@teste')
        cy.get('[data-testid="LoginForm_Footer_Container"] > :nth-child(1) > :nth-child(1)').click()
        cy.get('.r-16y2uox > .css-1dbjc4n > .css-4rbku5 > .css-901oao').should('contain' , 'Home')
    });

    it('Deve aparecer uma mensagem caso usuário não seja identificado', () => {
        cy.get('.r-mk0yit').type('sugarfreebestin@gmail.com') 
        cy.get('[style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"]').click()
        cy.get('.r-12vffkv > .r-1jgb5lz').should('contain' , 'Sorry, we could not find your account.')
    });

    it('Deve aparecer uma mensagem de recuperação caso a senha seja inválida', () => {
        cy.get('.r-mk0yit').type('asulkaa')
        cy.get('[style="background-color: rgb(15, 20, 25); border-color: rgba(0, 0, 0, 0);"]').click()
        cy.get('.r-mk0yit.r-13qz1uu > .r-mk0yit').type('camzhot')
        cy.get('[data-testid="LoginForm_Footer_Container"] > :nth-child(1) > :nth-child(1)').click()
        cy.get('.r-12vffkv > .r-1jgb5lz').should('contain' , 'Wrong password!')    
    });

})