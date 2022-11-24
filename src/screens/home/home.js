window.Page.home = {

    addHeader: () => {
        const header = document.createElement('header');
        const navHeader = document.createElement('nav');
        const nav = CreateElementWithAttribute('div', 'class', 'headerNav');
        nav.setAttribute('id', 'headerNav');
        const ul = document.createElement('ul');

        const iconOpen = document.createElement('img');
        iconOpen.setAttribute('src', './src/assets/imgs/bars_icon.svg');
        iconOpen.addEventListener('click', () => { Page.home.showMenu() });
        const iconClose = document.createElement('img');
        iconClose.setAttribute('src', './src/assets/imgs/x_icon.svg');
        iconClose.addEventListener('click', () => { Page.home.hideMenu() });
        nav.appendChild(iconOpen);
        const navLinks = [
            { text: 'Home', onClick: () => { Page.home.addHomeBody() } },
            { text: 'Categorias', onClick: () => { Page.categoryList() } },
            { text: 'Registrar Categoria', onClick: () => { Page.categoryRegister() } },
            { text: 'Estabelecimentos', onClick: () => { Page.companiesList() } },
            { text: 'Cadastrar Estabelecimento', onClick: () => { Page.companiesRegister() } }
        ];

        navLinks.forEach(page => {
            const item = document.createElement('li');
            item.textContent = page.text;
            item.addEventListener('click', page.onClick);
            ul.appendChild(item);
        });
        nav.appendChild(ul);
        nav.appendChild(iconClose);
        navHeader.appendChild(nav);
        header.appendChild(navHeader);
        document.body.appendChild(header);
    },
    addFooter: async () => {
        const footer = document.createElement('footer');
        const nav = CreateElementWithAttribute('nav', 'class', 'footerNav');
        const ul = document.createElement('ul');

        const companies = await CallApi({ method: 'POST', service: 'establishment/list', body: getCompaniesBody});
        const map = new Map();
        companies.forEach(company => {
            if (map.get(company.category.name) == undefined) {
                map.set(company.category.name, 1);
            }
            else {
                let aux = map.get(company.category.name);
                aux++;
                map.set(company.category.name, aux); ``
            }
        });

        map.forEach((value, key) => {
            const li = document.createElement('li');
            li.textContent = `${key} - ${value}`;
            li.addEventListener('click', () => { Page.companiesList(key) });
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        footer.appendChild(nav);
        document.body.appendChild(footer);
    },
    addHomeBody: async () => {
        main.innerHTML = '';
        const section = CreateElementWithAttribute('section', 'class', 'mainAboutUs');
        const divRow = CreateElementWithAttribute('div', 'class', 'aboutUsRow');
        const divCol = CreateElementWithAttribute('div', 'class', 'aboutUsCol');
        const title = document.createElement('h1');
        title.innerText = 'About Us';
        divRow.appendChild(title);

        const title2 = document.createElement('h2');
        title2.innerText = 'Integrantes';
        divRow.appendChild(title2);

        const imgSrc = [
            { src: './src/assets/imgs/alencastro.jpg', link: 'https://www.linkedin.com/in/matheus-kenderessy/' },
            { src: './src/assets/imgs/roberto.jpg', link: 'https://www.linkedin.com/in/roberto-avelino-a96866237/' },
            { src: './src/assets/imgs/sathya.jpg', link: 'https://www.linkedin.com/in/sathyagimenes/' },
            { src: './src/assets/imgs/sergio.jpg', link: 'https://www.linkedin.com/in/sergio-fleury-dias-filho/' },
            { src: './src/assets/imgs/taina.jpg', link: 'https://www.linkedin.com/in/taina-maia-9aaa1a10a/' }
        ]
        imgSrc.forEach(element => {
            const img = document.createElement('img');
            img.setAttribute('src', element.src);
            img.addEventListener('click', () => { window.open(element.link, '_blank') })
            divCol.appendChild(img);
        });

        divRow.appendChild(divCol);


        const p = document.createElement('p');
        p.innerText = 'Esse projeto foi realizado por Matheus Alencastro, Roberto Avelino, Sathya Gimenes, Sergio Dias e Taina Maia referente ao Módulo 09 de Front End Dinâmico'
        divRow.appendChild(p);
        section.appendChild(divRow);

        main.appendChild(section);
    },
    hideMenu: () => {
        const navElements = document.getElementById('headerNav');
        navElements.style.right = '-200px';
        navElements.style.backgroundColor = '0 #222725';
    },
    showMenu: () => {
        const navElements = document.getElementById('headerNav');
        navElements.style.right = '0';
        navElements.style.backgroundColor = '1 #222725';
    }
};