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

// 1. Pesquisar por uma imagem, exibir o resultado, clicar no link da imagem e validar que a imagem está sendo exibida.
describe('Validar imagem', () => {
it.only('Pesquisar imagem', () =>{
    cy.visit('https://www.google.com/imghp?hl=pt-BR&ogbl');
    cy.get('[id=APjFqb').click();
    cy.get('[id=APjFqb').type('sorvete').type('{ENTER}');
    cy.get('[href="https://www.paodeacucar.com/produto/395876/sorvete-napolitano-kibon-cremosissimo-pote-1,5l"]', {timeout:6000}).eq(0).click({force: true});
    cy.get('[src="https://static.paodeacucar.com/img/uploads/1/76/13269076.jpg"]', {timeout: 10000}).should('be.visible'); 
  })
})
// 2. Acessar um e-commerce e adicionar um item ao carrinho.

// 3. Validar que o item foi adicionado no carrinho.