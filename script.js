const catalogoProdutos = [
    { nome: 'Notebook Dell i7 14" 500GB SSD 16RAM', descricao: 'Notebook de alto desempenho com processador Intel i7 e SSD de 500GB, ideal para trabalho pesado.', preco: 7859.59, categoria: 'Notebook', imagem: 'imagens/-1640108999.jpg' },
    { nome: 'Notebook Lenovo i5 15" 250GB SSD 16RAM', descricao: 'Notebook equilibrado para uso diário, com tela de 15 polegadas e boa autonomia.', preco: 5699.00, categoria: 'Notebook', imagem: 'imagens/71704tDr9NL._AC_UF350,350_QL80_.jpg' },
    { nome: 'Multilaser Notebook Ultra UB261 Celeron N4020C 128GB 4GB RAM', descricao: 'Notebook de entrada, leve e compacto, indicado para tarefas básicas do dia a dia.', preco: 1999.99, categoria: 'Notebook', imagem: 'imagens/610VuYNv4KL._AC_UF894,1000_QL80_.jpg' },
    { nome: 'Notebook Asus ROG Strix Intel Core i9', descricao: 'Notebook gamer de alta performance, com processador i9 e placa de vídeo dedicada.', preco: 10879.5, categoria: 'Notebook', imagem: 'imagens/81JElV8apnL._AC_UF894,1000_QL80_.jpg' },
    { nome: 'Impressora Epson EcoTank', descricao: 'Impressora com sistema de tanque de tinta, reduz o custo por impressão.', preco: 999.00, categoria: 'Impressora', imagem: 'imagens/C11CE56303_Multifunciones_Epson EcoTank L220_ES.png' },
    { nome: 'Impressora Epson Ecotank L1250 Wi-Fi', descricao: 'Impressora com conexão Wi-Fi e tanque de tinta, prática para impressão sem fio.', preco: 889.99, categoria: 'Impressora', imagem: 'imagens/L1250-(2).jpg' },
    { nome: 'Impressora Laser Color Pro HP 4203DW', descricao: 'Impressora a laser colorida, rápida e indicada para uso profissional.', preco: 4298.99, categoria: 'Impressora', imagem: 'imagens/Ulysses_DW_00002_M1576843.png' },
    { nome: 'HP DeskJet Ink Advantage 2975 Sem fio All-in-One Cor', descricao: 'Multifuncional sem fio que imprime, copia e digitaliza, com boa qualidade colorida.', preco: 496.7, categoria: 'Impressora', imagem: 'imagens/-1678881806.jpg' },
    { nome: 'Iphone 17 Pro Max 256GB', descricao: 'Smartphone topo de linha da Apple, com câmera profissional e tela OLED.', preco: 4500.99, categoria: 'Celular', imagem: 'imagens/iphone-17-pro-17-pro-max-hero.png' },
    { nome: 'Iphone 16e 128GB 5G', descricao: 'Smartphone Apple com conectividade 5G e bom custo-benefício na linha iPhone.', preco: 4059.00, categoria: 'Celular', imagem: 'imagens/412RWxKFt8L._AC_UF1000,1000_QL80_.jpg' },
    { nome: 'Samsung Galaxy S26 Ultra 256GB', descricao: 'Smartphone premium da Samsung, com câmera de alta resolução e tela grande.', preco: 6800.99, categoria: 'Celular', imagem: 'imagens/images.jpg' },
    { nome: 'Mouse HP 150 Wireless Sem Fio', descricao: 'Mouse sem fio leve e confortável, ideal para uso no escritório ou em casa.', preco: 72.99, categoria: 'Acessorios', imagem: 'imagens/61pCizsl7FL.jpg' },
    { nome: 'Teclado Com Fio Keyboard Logitech K120 920-004423 | Preto', descricao: 'Teclado com fio simples e durável, indicado para uso básico do dia a dia.', preco: 75.00, categoria: 'Acessorios', imagem: 'imagens/images (1).jpg' },
    { nome: 'Teclado Mecânico Gamer Redragon Valheim Rainbow Switch Marrom', descricao: 'Teclado mecânico com iluminação RGB, indicado para jogos e digitação rápida.', preco: 199.99, categoria: 'Acessorios', imagem: 'imagens/k608-r_ptbrown_.jpg' },
    { nome: 'Kit Teclado e Mouse Logitech MK270 Sem Fio', descricao: 'Kit sem fio com teclado e mouse, prático para configurar o setup rapidamente.', preco: 187.62, categoria: 'Acessorios', imagem: 'imagens/mk270.jpeg' },
    { nome: 'Samsung Galaxay A55 5G 256GB', descricao: 'Smartphone intermediário da Samsung, com boa câmera e conectividade 5G.', preco: 1659.99, categoria: 'Celular', imagem: 'imagens/samsung_galaxy_a55_sm_a556e_ds_5g_dual_128_gb_awesome_ice_blue_122557_0000.jpg' },
    { nome: 'Samsung Galaxy A03s 64GB', descricao: 'Smartphone de entrada da Samsung, indicado para uso básico do dia a dia.', preco: 1299.99, categoria: 'Celular', imagem: 'imagens/51m45B3Yy+L.jpg' },
    { nome: 'Monitor LG 24" Full HD', descricao: 'Monitor Full HD com boa nitidez de imagem e ótimo custo-benefício.', preco: 749.00, categoria: 'Monitor', imagem: 'imagens/monitor-lg-24-ips-100hz_1600x1600fill_ffffff.jpg' },
    { nome: 'Monitor Samsung 27" Curvo Full HD', descricao: 'Monitor curvo de 27 polegadas, proporciona maior imersão visual.', preco: 1099.00, categoria: 'Monitor', imagem: 'imagens/images (2).jpg' },
    { nome: 'Monitor Dell 24" IPS 75Hz', descricao: 'Monitor IPS com taxa de atualização de 75Hz, cores fiéis e boa fluidez.', preco: 899.90, categoria: 'Monitor', imagem: 'imagens/819JqXZ2+SL._AC_UF894,1000_QL80_.jpg' },
    { nome: 'Monitor Gamer AOC 27" 165Hz', descricao: 'Monitor gamer com alta taxa de atualização, indicado para jogos competitivos.', preco: 1499.00, categoria: 'Monitor', imagem: 'imagens/27g2-bk.jpg' },
    { nome: 'Fone JBL Tune 510BT', descricao: 'Fone de ouvido sem fio com boa qualidade sonora e bateria de longa duração.', preco: 219.90, categoria: 'Acessorios', imagem: 'imagens/7c3b7adaa49807d71197c3815898eb8b.jpg' },
    { nome: 'Fone Sony WH-CH520 Bluetooth', descricao: 'Fone de ouvido Bluetooth confortável, indicado para uso prolongado.', preco: 299.00, categoria: 'Acessorios', imagem: 'imagens/br-11134207-81ztc-mk16sw4dvaipbc.jpg' },
    { nome: 'Fone Philips TAH4205 Bluetooth', descricao: 'Fone de ouvido sem fio com bom custo-benefício para uso diário.', preco: 189.90, categoria: 'Acessorios', imagem: 'imagens/images (3).jpg' }
];

const divCatalogo = document.getElementById('div-catalogo');

function removerAcentos(texto) {
    return texto.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function mostrarCatalogoProdutos(event) {
    if (event) event.preventDefault();

    const filtro = removerAcentos(
        document.getElementById('filtro')
            .value
            .trim()
            .toLowerCase()
    );

    let produtosFiltrados = [];
    divCatalogo.innerHTML = '';

    if (filtro !== '') {
        produtosFiltrados = catalogoProdutos.filter(produto =>
            removerAcentos(produto.nome.toLowerCase()).includes(filtro) ||
            removerAcentos(produto.descricao.toLowerCase()).includes(filtro) ||
            removerAcentos(produto.categoria.toLowerCase()).includes(filtro)
        );
    } else {
        produtosFiltrados = catalogoProdutos;
    }

    if (produtosFiltrados.length === 0) {
        divCatalogo.innerHTML = `<p class="filtro-erro">Nao há produtos nesta categoria</p>`;
        return;
    }

    produtosFiltrados.forEach((produto) => {
        const divCard = document.createElement('div');
        divCard.classList.add('div-card');

        const img = document.createElement('img');
        img.src = produto.imagem;
        img.classList.add('img-produto');

        const h3 = document.createElement('h3');
        h3.innerHTML = produto.nome;

        const pDescricao = document.createElement('p');
        pDescricao.innerHTML = produto.descricao;
        pDescricao.classList.add('p-descricao');

        const spanCategoria = document.createElement('span');
        spanCategoria.innerHTML = produto.categoria;
        spanCategoria.classList.add('span-categoria');

        const spanPreco = document.createElement('span');
        spanPreco.innerHTML = `R$ ${produto.preco.toFixed(2).replace('.', ',')}`;
        spanPreco.classList.add('span-preco');

        divCard.appendChild(img);
        divCard.appendChild(h3);
        divCard.appendChild(pDescricao);
        divCard.appendChild(spanCategoria);
        divCard.appendChild(spanPreco);

        divCatalogo.appendChild(divCard);
    });
}

mostrarCatalogoProdutos();