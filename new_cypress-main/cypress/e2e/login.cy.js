describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');
         cy.get('#mail').type('german@dolnikov.ru');
         cy.get('#pass').type('iLoveqastudio1'); 
         cy.get('#loginButton').click();
         cy.get('#messageHeader') .contains('Авторизация прошла успешно');
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');
       
     }) 

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#forgotEmailButton') .click();
        cy.get('#mailForgot').type('german@dolnikov.ru');
        cy.get('#restoreEmailButton').click();
        cy.get('#messageHeader') .contains('Успешно отправили пароль на e-mail');
        cy.get('#exitMessageButton > .exitIcon') .should('be.visible');
      
    })  
    
    it('Неверный пароль и верный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('german@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio7'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader') .contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      
    }) 

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('herman@dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader') .contains('Такого логина или пароля нет');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
      
    })
    it('Валидация на наличие @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('germandolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader') .contains('Нужно исправить проблему валидации');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');
     })

     it('Строчные буквы в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#mail').type('GerMan@Dolnikov.ru');
        cy.get('#pass').type('iLoveqastudio1'); 
        cy.get('#loginButton').click();
        cy.get('#messageHeader') .contains('Авторизация прошла успешно');
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');

    })
})