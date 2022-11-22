window.Page.home = {

    addHeader: () => {
        const header = document.createElement('header');
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        const navLinks = [
            {text: "Home", onClick : () => main.innerHTML = ""},
            {text: "Categorias", onClick : () => {Page.categoryList()}},
            {text: "Registrar Categoria", onClick : () => {Page.categoryRegister()}},
            {text: "Estabelecimentos", onClick : () => {Page.companiesList()}},
            {text: "Cadastrar Estabelecimento", onClick : () => {Page.companiesRegister()}}
        ]

        navLinks.forEach(page =>{
            const item = document.createElement('li');
            item.textContent = page.text;
            item.addEventListener("click", page.onClick);
            ul.appendChild(item);
        });
        nav.appendChild(ul);
        header.appendChild(nav);
        document.body.appendChild(header);
    },
cd
};