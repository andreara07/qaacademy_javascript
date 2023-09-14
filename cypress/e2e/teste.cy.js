describe('Validar site Google', () => {

  beforeEach(() =>{
    cy.visit('https://www.google.com');
  })
  it('Pesquisar onça no Google', () => {
    cy.get('[id="APjFqb"]').click();
    cy.get('[id="APjFqb"]').type('onça WWF Brasil').type('{ENTER}');
    cy.get('[href="https://www.wwf.org.br/natureza_brasileira/areas_prioritarias/pantanal/nossas_solucoes_no_pantanal/protecao_de_especies_no_pantanal/onca_pintada/"]', {timeout:6000}).eq(0).click({force: true});
    cy.origin('https://www.wwf.org.br', () => {
    cy.get('[src="//cdnassets.panda.org/_skins/international/img/logo.png"]', {timeout: 6000}).should('be.visible')
    })
  })
})

// .only -> executa apenas o it
// .skip -> pula o it
// .should -> deve... ('be.visible') ser visível... 