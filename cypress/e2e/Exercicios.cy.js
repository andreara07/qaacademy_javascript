// 1. Pesquisar por uma imagem, exibir o resultado, clicar no link da imagem e validar que a imagem está sendo exibida.
describe('Validar imagem', () => {
    it('Pesquisar imagem', () => {
        cy.visit('https://www.google.com/imghp?hl=pt-BR&ogbl');
        cy.get('[id=APjFqb').click();
        cy.get('[id=APjFqb').type('sorvete').type('{ENTER}');
        cy.get('[href="https://www.paodeacucar.com/produto/395876/sorvete-napolitano-kibon-cremosissimo-pote-1,5l"]', {timeout:90000}).eq(0).click({force: true});
        cy.contains('Sorvete Napolitano Kibon Cremosíssimo Pote 1,5l').should('be.visible'); 
      })
    })
    
// 2. Acessar um e-commerce e adicionar um item ao carrinho.
// 3. Validar que o item foi adicionado no carrinho.
describe('Validar carrinho', () => {
    it('Adicionar item ao carrinho', () => {
      cy.visit('https://www.amazon.com.br');
      cy.get('[id=twotabsearchtextbox]').click();
      cy.get('[id=twotabsearchtextbox]').type('sherlock holmes').type('{ENTER}');
      cy.get('[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]').eq(1).click();
      cy.get('[id=add-to-cart-button]').click();
      cy.get('[class="a-button-text"]').eq(1).click();
      cy.contains('Sherlock Holmes').should('be.visible');
      })
    })