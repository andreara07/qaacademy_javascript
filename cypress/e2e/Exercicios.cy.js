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
    it.only('Adicionar item ao carrinho', () => {
        const URL = "https://www.amazon.com.br";
        const campoDePesquisa = '[id=twotabsearchtextbox]';
        const conteudo = "sherlock holmes";
        const selecionarProduto = '[class="a-size-mini a-spacing-none a-color-base s-line-clamp-4"]';
        const adicionarProduto = '[id=add-to-cart-button]';
        const acessarCarrinho = '[class="a-button-text"]';
        const validadorCarrinho = "Subtotal (1 produto)";
        cy.visit(URL);
        cy.get(campoDePesquisa).click();
        cy.get(campoDePesquisa).type(conteudo).type('{ENTER}');
        cy.get(selecionarProduto).eq(1).click();
        cy.get(adicionarProduto).click();
        cy.get(acessarCarrinho).eq(1).click({force: true});
        cy.contains(validadorCarrinho, {timeout:90000}).should('be.visible');
    })
})