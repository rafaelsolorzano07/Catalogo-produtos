 const catalogoProdutos = [
            ['Notebook Dell i7 14" 500GB SSD 16RAM', 7859.59, 'Notebook', 'imagens/-1640108999.jpg'],
            ['Notebook Lenovo i5 15" 250GB SSD 16RAM', 5699.00, 'Notebook', 'imagens/71704tDr9NL._AC_UF350,350_QL80_.jpg'],
            ['Multilaser Notebook Ultra UB261 Celeron N4020C 128GB 4GB RAM', 1999.99, 'Notebook','imagens/610VuYNv4KL._AC_UF894,1000_QL80_.jpg'],
            ['Notebook Asus ROG Strix Intel Core i9', 10879.5, 'Notebook', 'imagens/81JElV8apnL._AC_UF894,1000_QL80_.jpg'],
            ['Impressora Epson EcoTank', 999.00, 'Impressora', 'imagens/C11CE56303_Multifunciones_Epson EcoTank L220_ES.png'],
            ['Impressora Epson Ecotank L1250 Wi-Fi', 889.99, 'Impressora', 'imagens/L1250-(2).jpg'],
            ['Impressora Laser Color Pro HP 4203DW', 4298.99, 'Impressora', 'imagens/Ulysses_DW_00002_M1576843.png'],
            ['HP DeskJet Ink Advantage 2975 Sem fio All-in-One Cor', 496.7, 'Impressora', 'imagens/-1678881806.jpg'],
            ['Iphone 17 Pro Max 256GB', 4500.99, 'Celular', 'imagens/iphone-17-pro-17-pro-max-hero.png'],
            ['Iphone 16e 128GB 5G', 4059.00,'Celular'],
            ['Samsung Galaxy S26 Ultra 256GB', 6800.99, 'Celular'],
            ['Mouse HP 150 Wireless Sem Fio', 72.99, 'Acessorios'],
            ['Teclado Com Fio Keyboard Logitech K120 920-004423 | Preto', 75.00, 'Acessorios'],
            ['Teclado Mecânico Gamer Redragon Valheim Rainbow Switch Marrom', 199.99, 'Acessorios'],
            ['Kit Teclado e Mouse Logitech MK270 Sem Fio', 187.62, 'Acessorios'],
            ['Samsung Galaxay A55 5G 256GB', 1659.99, 'Celular'],
            ['Samsung Galaxy A03s 64GB', 1299.99, 'Celular'],
            ['Monitor LG 24" Full HD', 749.00, 'Monitor'],
            ['Monitor Samsung 27" Curvo Full HD', 1099.00, 'Monitor'],
            ['Monitor Dell 24" IPS 75Hz', 899.90, 'Monitor'],
            ['Monitor Gamer AOC 27" 165Hz', 1499.00, 'Monitor'],
            ['Fone JBL Tune 510BT', 219.90, 'Acessorios'],
            ['Fone Sony WH-CH520 Bluetooth', 299.00, 'Acessorios'],
            ['Fone Philips TAH4205 Bluetooth', 189.90, 'Acessorios']

            
        ];

        const divCatalogo = document.getElementById('div-catalogo');

        function mostrarCatalogoProdutos(event) {
            if(event) event.preventDefault();

            const filtro = document.getElementById('filtro')
                .value
                .trim()
                .toLowerCase();

            let produtosFiltrados = [];
            divCatalogo.innerHTML = '';

            if (filtro !== '') {
                produtosFiltrados = catalogoProdutos
                    .filter(produto => produto[2].toLowerCase().includes(filtro));
            } else {
                produtosFiltrados = catalogoProdutos;
            }

            if(produtosFiltrados.length === 0) {
                divCatalogo.innerHTML = `<p class="filtro-erro">Nao há produtos nesta categoria</p>`;
                return;
            }

            produtosFiltrados.forEach((produto) => {
                const divCard = document.createElement('div');
                divCard.classList.add('div-card');

                const img = document.createElement('img');
                img.src = produto[3];
                img.classList.add('img-produto');

                const h3 = document.createElement('h3');
                h3.innerHTML = produto[0];

                const spanCategoria = document.createElement('span');
                spanCategoria.innerHTML = produto[2];
                spanCategoria.classList.add('span-categoria');

                const spanPreco = document.createElement('span');
                spanPreco.innerHTML = `R$ ${produto[1].toFixed(2).replace('.', ',')}`;
                spanPreco.classList.add('span-preco');

                divCard.appendChild(img);
                divCard.appendChild(h3);
                divCard.appendChild(spanCategoria);
                divCard.appendChild(spanPreco);

                divCatalogo.appendChild(divCard);
            });

        }
        mostrarCatalogoProdutos();