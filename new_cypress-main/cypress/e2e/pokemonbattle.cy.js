describe('Битва покемонов', function () {

    it('Покупка нового аватара для тренера', function () {
         cy.visit('https://pokemonbattle.ru/');
         cy.get(':nth-child(1) > .auth__input') .type('USER_LOGIN');
         cy.get('#password') .type('USER_PASSWORD'); 
         cy.get('.auth__button') .click();
         cy.wait(2000);
         cy.get('.header__container > .header__id') .click({ force: true }); 
         cy.get('[href="/shop"]') .click();                              
         cy.get(':nth-child(3) > .shop__button') .first().click({ force: true });   
         cy.get('.credit').type('4620869113632996');                     // вводим номер карты
         cy.get('.k_input_ccv').type('125');                             // вводим CVV карты
         cy.get('.k_input_date').type('1225');                           // вводим срок действия карты
         cy.get('.k_input_name').type('NAME');                           // вводим имя владельца действия карты
         cy.get('.pay-btn').click();                                     // нажимаем кнопку Оплатить
         cy.get('#cardnumber').type('56456');                            // вводим код подтверждения СМС
         cy.get('.payment__submit-button').click();                      // нажимаем кнопку Отправить
         cy.contains('Покупка прошла успешно').should('be.visible');     // проверяем наличие и видимость сообщения о успешной покупке
     });
 });