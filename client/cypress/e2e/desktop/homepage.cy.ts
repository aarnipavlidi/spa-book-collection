/* eslint-disable no-magic-numbers */
describe('Testing Book Collection homepage.', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Testing header element', () => {
    cy.location('pathname')
      .should('eq', '/');

    cy.get('header > nav')
      .should('have.length', 1)
      .within(() => {
        cy.get('div > h1')
          .should('have.text', 'Books Collection')
          .should('have.prop', 'tagName')
          .and('eq', 'H1');

        cy.get('ul > li')
          .children()
          .should('have.text', 'Our books')
          .should('have.class', 'underline')
          .should('have.attr', 'href', '/')
          .should('have.prop', 'tagName')
          .and('eq', 'A');
      });
  });

  it('Testing all inputs', () => {
    cy.location('pathname')
      .should('eq', '/');

    cy.get('[data-cy="formMainContainer"] > div')
      .should('have.length', 5)
      .first()
      .should('have.text', 'Please add new book into collection.')
      .next()
      .within(() => {
        cy.get('label')
          .should('have.text', 'Title')
          .should('have.attr', 'id', 'titleLabel')
          .should('have.prop', 'tagName')
          .and('eq', 'LABEL');

        cy.get('input')
          .should('have.attr', 'id', 'title-input')
          .should('have.attr', 'placeholder', 'Enter book\'s title.')
          .and('be.visible')
          .should('have.attr', 'value', '')
          .type('Testing on title input.')
          .should('have.attr', 'value', 'Testing on title input.')
          .and('be.visible')
          .clear()
          .should('have.attr', 'value', '')
          .should('have.prop', 'tagName')
          .and('eq', 'INPUT');
      })
      .next()
      .within(() => {
        cy.get('label')
          .should('have.text', 'Author')
          .should('have.attr', 'id', 'authorLabel')
          .should('have.prop', 'tagName')
          .and('eq', 'LABEL');

        cy.get('input')
          .should('have.attr', 'id', 'author-input')
          .should('have.attr', 'placeholder', 'Enter book\'s author.')
          .and('be.visible')
          .should('have.attr', 'value', '')
          .type('Testing on author input.')
          .should('have.attr', 'value', 'Testing on author input.')
          .and('be.visible')
          .clear()
          .should('have.attr', 'value', '')
          .should('have.prop', 'tagName')
          .and('eq', 'INPUT');
      })
      .next()
      .within(() => {
        cy.get('label')
          .should('have.text', 'Description')
          .should('have.attr', 'id', 'descriptionLabel')
          .should('have.prop', 'tagName')
          .and('eq', 'LABEL');

        cy.get('textarea')
          .should('have.attr', 'id', 'description-input')
          .should('have.attr', 'placeholder', 'Enter book\'s description.')
          .and('be.visible')
          .should('have.attr', 'rows', 4)
          .type('Testing on description input.')
          .should('have.text', 'Testing on description input.')
          .and('be.visible')
          .clear()
          .should('have.text', '')
          .should('have.prop', 'tagName')
          .and('eq', 'TEXTAREA');
      });
  });

  it('Testing all buttons', () => {
    cy.location('pathname')
      .should('eq', '/');

    cy.get('[data-cy="buttonMainContainer"] > button')
      .should('have.length', 1)
      .first()
      .should('be.visible')
      .should('have.attr', 'type', 'button')
      .should('not.be.disabled')
      .click()
      .within(() => {
        cy.get('span')
          .should('have.text', 'Save New')
          .and('be.visible');
      });
  });

  it('Testing notifications', () => {
    cy.location('pathname')
      .should('eq', '/');

    cy.get('[data-cy="notificationMainContainer"]')
      .should('have.text', 'Please add new book into collection.');

    cy.get('[data-cy="buttonMainContainer"] > button')
      .first()
      .should('have.text', 'Save New')
      .click();

    cy.get('[data-cy="notificationMainContainer"]')
      .should('have.text', 'One of the fields are missing. Please check missing fields and try again!')
      .and('have.class', 'text-red-900 bg-red-50')
      .and('be.visible')
      .and('have.attr', 'role', 'alert');

    cy.get('[data-cy="formMainContainer"] > div')
      .should('have.length', 5)
      .first()
      .next()
      .within(() => {
        cy.get('input')
          .should('have.attr', 'id', 'title-input')
          .should('have.attr', 'placeholder', 'Enter book\'s title.')
          .type('Title value');
      })
      .next()
      .within(() => {
        cy.get('input')
          .should('have.attr', 'id', 'author-input')
          .should('have.attr', 'placeholder', 'Enter book\'s author.')
          .type('Author value');
      })
      .next()
      .within(() => {
        cy.get('textarea')
          .should('have.attr', 'id', 'description-input')
          .should('have.attr', 'placeholder', 'Enter book\'s description.')
          .type('Description value');
      });

    cy.get('[data-cy="buttonMainContainer"] > button')
      .first()
      .should('have.text', 'Save New')
      .click();

    cy.get('[data-cy="notificationMainContainer"]')
      .should('have.text', 'You have successfully added book into our collection!')
      .and('have.class', 'text-green-900 bg-green-50')
      .and('be.visible')
      .and('have.attr', 'role', 'alert');
  });

  it('Testing books list', () => {
    cy.location('pathname')
      .should('eq', '/');

    cy.get('[data-cy="booksSectionMainContainer"] > table')
      .within(() => {
        cy.get('thead > tr > th')
          .should('have.length', 2)
          .first()
          .should('have.text', 'Title')
          .next()
          .should('have.text', 'Author');

        cy.get('tbody > tr')
          .first()
          .should('have.attr', 'id', 1)
          .children()
          .should('have.length', 2)
          .first()
          .should('have.attr', 'href', '/1')
          .should('have.text', 'Story about programmer.')
          .click()
          .next()
          .should('have.text', 'Aarni Pavlidi');
      });

    cy.location('pathname').should('eq', '/1');

    cy.get('[data-cy="formMainContainer"] > div')
      .should('have.length', 5)
      .first()
      .next()
      .within(() => {
        cy.get('input')
          .should('have.attr', 'id', 'title-input')
          .and('have.attr', 'value', 'Story about programmer.')
          .and('be.visible');
      })
      .next()
      .within(() => {
        cy.get('input')
          .should('have.attr', 'id', 'author-input')
          .and('have.attr', 'value', 'Aarni Pavlidi')
          .and('be.visible');
      })
      .next()
      .within(() => {
        cy.get('textarea')
          .should('have.attr', 'id', 'description-input')
          .and('have.text', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Laoreet non curabitur gravida arcu ac tortor dignissim. Gravida neque convallis a cras semper auctor neque vitae.')
          .and('be.visible');
      });
  });
});
