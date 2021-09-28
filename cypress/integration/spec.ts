it('loads examples', () => {
  cy.visit('/');
  cy.contains('Alexander, welcome to OrgChart!');
});
