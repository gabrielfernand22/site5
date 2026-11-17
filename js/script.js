document.addEventListener('DOMContentLoaded', () => {
    // 1. BANCO DE DADOS MOCKADO (PRODUTOS DE INFORMÁTICA)
    const products = [
        {
            id: 1,
            name: 'Placa de Vídeo RTX 4070 Ti Super 16GB',
            category: 'placas',
            section: 'hardware',
            tag: 'Destaque',
            price: 5499.90,
            desc: 'Arquitetura Ada Lovelace, Triple Fan, Ray Tracing e DLSS 3.5.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx2zdn4OwEaIsDKvLJ7ThJ_RF9L9ULqauw2mIZ3Mh6gg&s=10'
        },
        {
            id: 2,
            name: 'SSD NVMe M.2 2TB Gen4 7400MB/s',
            category: 'hardware',
            section: 'hardware',
            tag: 'Ultra Rápido',
            price: 899.90,
            desc: 'Leitura extrema para carregamento instantâneo de jogos e sistemas.',
            image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQ2GC69VQuEOyIETNfiXrTVyPj7-uiWRrJuExyQeq4ltdlmUxcYqoOSXwsTpEjvRq2dkuqwgjU7oF4u5K4PwcAQNHeMMQtvAeTp4cVSYDlDWJhHA6Zc4X0-tRB0cosVn_DBV0Rb02M&usqp=CAc'
        },
        {
            id: 3,
            name: 'Placa-Mãe Z790 Gaming Wi-Fi DDR5',
            category: 'hardware',
            section: 'hardware',
            tag: 'Novo',
            price: 2150.00,
            desc: 'Suporte para processadores de última geração, PCIe 5.0 e VRM reforçado.',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRErAI6ieiHFnA3SiuA4UrW2Cubyu96VuHCu8NSr1suGcYTG7O803V1H5_oZCtegNITlxUEOrqjBquGB9ZlYo8n9S1eLq1WTwQxqaST64_3uZm3Ms2qRz6eIhBuftGr4FYkcHnkMFPkgg&usqp=CAc'
        },
        {
            id: 4,
            name: 'Placa de Vídeo RX 7800 XT 16GB GDDR6',
            category: 'placas',
            section: 'hardware',
            tag: 'Custo-Benefício',
            price: 3890.00,
            desc: 'Excelente desempenho em Quad HD (1440p) com sistema de resfriamento silencioso.',
            image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQnJ18-EJKKHQsl6hd2xsM2Fr8IhFN_-moqllCP3Ofza7ccVKOeQ3ExMorxub-k69tx-XFsLNJfSVjyuEemrZNwdrvK92u71MSZSgy6NCNX_gGqUjy99lDQUt63reMuM-LTQ-BZIg&usqp=CAc'
        },
        {
            id: 5,
            name: 'Mouse Gamer Wireless Pro 26K DPI',
            category: 'perifericos',
            section: 'peripherals',
            tag: 'Leve 58g',
            price: 459.90,
            desc: 'Sensor óptico de alta precisão, switches ópticos e bateria de 70 horas.',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSTF4i0dvcPgLnpVCfz8VfoBMlux2tLUE_lY3_kenEUO5UOd1z3owkCF7YvwxkRsd_WuOwa79HUIOg6MCHHMT-obW7mJ9hEauyfiZBhpOWxlRrRvnhiOVKefa2JdDT-NDpEvb2gNdo&usqp=CAc'
        },
        {
            id: 6,
            name: 'Teclado Mecânico RGB Switch Red',
            category: 'perifericos',
            section: 'peripherals',
            tag: 'Compacto 75%',
            price: 389.00,
            desc: 'Keycaps em PBT Double-Shot, hot-swappable e cabo USB-C removível.',
            image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcT4piWWLAmd85ILsa8hX_ghxX6zKve5Qtesl-xzxmIBRwI5e2Nlb53_0lnthRlyfbTtIOZ-dJ_Ay2RVvqcjbv0pfrxJ2_nXfjGLI-wzXoF6Z0nSLLCl5_nYtYj7AnlCkySsoU5kJjM0cDw&usqp=CAc'
        },
        {
            id: 7,
            name: 'Headset Surround 7.1 Wireless',
            category: 'perifericos',
            section: 'peripherals',
            tag: 'Áudio Studio',
            price: 620.00,
            desc: 'Drivers de 50mm em neodímio, microfone com cancelamento de ruído.',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFth2lB2mIThP96P0KwjVOKbVe20NqGdPUmlj7EZWIEg&s=10'
        },
        {
            id: 8,
            name: 'Monitor Gamer 27" IPS 180Hz 1ms',
            category: 'perifericos',
            section: 'peripherals',
            tag: '180Hz',
            price: 1499.00,
            desc: 'Painel Fast IPS com fidelidade de cores sRGB 99% e compatível com G-Sync.',
            image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcR-h7uU_kl70rFKQLs4a9yrK0_H99IIjDf_qlBpvcdpU6r4rG1UmQicVLjAq27GdA6W5iW2hHHK3UicsHfPnE7uzxZNUTg1_T9xD3xeOsd5_nFiRBCh96DzBbPvgktZge0DGDwjHuU&usqp=CAc'
        },
        {
            id: 9,
            name: 'Notebook Gamer Legion 16" RTX 4060',
            category: 'notebooks',
            section: 'notebooks',
            tag: 'Top Vendas',
            price: 7899.00,
            desc: 'Core i7 13ª Ger, 16GB RAM DDR5, SSD 1TB e tela WQXGA 165Hz.',
            image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSdzLwp0k894IJrYp5PlHGRbLLByunNpJn3KM6CSxoigtxMZ3ZH1ZnlOtJUED67yD59hb30sUojrPdicZpTsjp73hn-it9SElU5OgJ0z0sxFqnjz1yzc8GZgf5-3IN-zR-FInrufw&usqp=CAc'
        },
        {
            id: 10,
            name: 'Ultrabook Pro 14" OLED Evo',
            category: 'notebooks',
            section: 'notebooks',
            tag: 'Ultrafino',
            price: 6299.00,
            desc: 'Apenas 1.2kg, chassi em alumínio, tela OLED 2.8K e bateria para o dia todo.',
            image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTi04TzkiJLmjBUWSfQhKyyHt3S0HKfQR8rV_pWJulEwWDDis88xUNee4mquLa4uBApv26ZtpPoalod-wVrFrw7JgBlCQ5NiCLFFcWd9Dhhjj9pDFq7YX14BB6PMQmiA5ivVXw6gKQbEXM&usqp=CAc'
        }
    ];

    // Textos das páginas institucionais do rodapé
    const institutionalPages = {
        sobre: {
            title: 'Sobre a TechCore Informática',
            text: 'Fundada por entusiastas de tecnologia, a TechCore nasceu com a missão de democratizar o acesso a hardware de ponta no Brasil. Trabalhamos diretamente com os maiores fabricantes globais, garantindo procedência, garantia oficial e suporte técnico especializado para gamers, criadores de conteúdo e empresas.'
        },
        privacidade: {
            title: 'Política de Privacidade (LGPD)',
            text: 'A TechCore respeita rigorosamente a Lei Geral de Proteção de Dados (LGPD). Seus dados pessoais são utilizados exclusivamente para processamento de pedidos, emissão de notas fiscais e melhoria da sua experiência de navegação. Nunca comercializamos informações de clientes com terceiros.'
        },
        trocas: {
            title: 'Política de Trocas e Devoluções',
            text: 'Você possui até 7 (sete) dias corridos após o recebimento do produto para solicitar devolução por arrependimento, desde que o item esteja em sua embalagem original e sem indícios de mau uso. Para defeitos técnicos, acionamos a garantia expressa diretamente com nossa equipe de RMA.'
        }
    };

    // 2. RENDERIZAÇÃO DE CARDS DE PRODUTOS
    function createProductCard(product) {
        const formattedPrice = product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        });

        return `
            <article class="product-card">
                <div class="product-img-wrapper">
                    <span class="product-tag">${product.tag}</span>
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3 class="product-title">${product.name}</h3>
                    <p class="product-desc">${product.desc}</p>
                    <div class="product-footer">
                        <span class="product-price">${formattedPrice}</span>
                        <button class="btn-buy" data-id="${product.id}">
                            <i class="fa-solid fa-cart-plus"></i> Comprar
                        </button>
                    </div>
                </div>
            </article>
        `;
    }

    function renderAllGrids() {
        const grids = {
            'home-hardware-grid': products.filter(p => p.section === 'hardware'),
            'home-peripherals-grid': products.filter(p => p.section === 'peripherals'),
            'notebooks-grid': products.filter(p => p.category === 'notebooks'),
            'placas-grid': products.filter(p => p.category === 'placas'),
            'perifericos-grid': products.filter(p => p.category === 'perifericos')
        };

        for (const [gridId, items] of Object.entries(grids)) {
            const container = document.getElementById(gridId);
            if (container) {
                container.innerHTML = items.map(createProductCard).join('');
            }
        }
    }

    renderAllGrids();

    // 3. NAVEGAÇÃO SPA (SIMULAÇÃO DE PÁGINAS) E MENU MOBILE
    const navMenu = document.querySelector('.nav-menu');
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const pageSections = document.querySelectorAll('.page-section');
    const navLinks = document.querySelectorAll('.nav-link');

    mobileMenuBtn.addEventListener('click', () => {
        navMenu.classList.toggle('open');
    });

    function navigateTo(targetId) {
        // Esconde todas as seções e ativa a desejada
        pageSections.forEach(section => {
            section.classList.remove('active');
            if (section.id === targetId) {
                section.classList.add('active');
            }
        });

        // Atualiza destaque no menu
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.target === targetId) {
                link.classList.add('active');
            }
        });

        // Fecha menu mobile e sobe ao topo
        navMenu.classList.remove('open');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Delegação de clique para links de navegação
    document.body.addEventListener('click', (e) => {
        const targetLink = e.target.closest('[data-target]');
        if (targetLink) {
            e.preventDefault();
            navigateTo(targetLink.dataset.target);
        }

        // Links institucionais do rodapé
        const infoLink = e.target.closest('.footer-info-link');
        if (infoLink) {
            e.preventDefault();
            const infoKey = infoLink.dataset.info;
            const infoData = institutionalPages[infoKey];
            if (infoData) {
                const container = document.getElementById('institutional-content');
                container.innerHTML = `
                    <h2>${infoData.title}</h2>
                    <p>${infoData.text}</p>
                    <br>
                    <button class="btn-primary" data-target="home">Voltar para a Loja</button>
                `;
                navigateTo('institucional');
            }
        }
    });

    // 4. CARROSSEL INTERATIVO
    const slides = document.querySelectorAll('.carousel-slide');
    const dotsContainer = document.querySelector('.carousel-dots');
    const prevBtn = document.querySelector('.carousel-btn.prev');
    const nextBtn = document.querySelector('.carousel-btn.next');
    let currentSlide = 0;
    let slideInterval;

    // Cria bolinhas (dots) dinamicamente
    slides.forEach((_, idx) => {
        const dot = document.createElement('span');
        dot.classList.add('dot');
        if (idx === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(idx));
        dotsContainer.appendChild(dot);
    });

    const dots = document.querySelectorAll('.dot');

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        dots[currentSlide].classList.remove('active');

        currentSlide = (index + slides.length) % slides.length;

        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
        resetAutoPlay();
    }

    prevBtn.addEventListener('click', () => goToSlide(currentSlide - 1));
    nextBtn.addEventListener('click', () => goToSlide(currentSlide + 1));

    function resetAutoPlay() {
        clearInterval(slideInterval);
        slideInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
    }

    resetAutoPlay();

    // 5. CARRINHO DE COMPRAS SIMULADO E NOTIFICAÇÃO
    let cartItems = 0;
    const cartCountEl = document.getElementById('cart-count');
    const toastEl = document.getElementById('toast');
    let toastTimeout;

    function showToast(message) {
        toastEl.textContent = message;
        toastEl.classList.add('show');
        clearTimeout(toastTimeout);
        toastTimeout = setTimeout(() => {
            toastEl.classList.remove('show');
        }, 2800);
    }

    document.body.addEventListener('click', (e) => {
        const buyBtn = e.target.closest('.btn-buy');
        if (buyBtn) {
            cartItems++;
            cartCountEl.textContent = cartItems;
            showToast('Produto adicionado ao carrinho!');
        }
    });

    document.getElementById('cart-toggle').addEventListener('click', () => {
        if (cartItems === 0) {
            showToast('Seu carrinho está vazio.');
        } else {
            showToast(`Você tem ${cartItems} item(ns) no carrinho.`);
        }
    });

    // 6. FORMULÁRIO DE CONTATO
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            showToast('Mensagem enviada! Nossa equipe responderá em breve.');
            contactForm.reset();
        });
    }
});