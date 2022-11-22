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
    addFooter: async () => {
        const footer = document.createElement('footer');
        const nav = document.createElement('nav');
        const ul = document.createElement('ul');

        const companies = await GetCompanies();
        const map = new Map();
        companies.forEach(company => {
            if(map.get(company.category.name) == undefined){
                map.set(company.category.name, 1);
            }
            else{
                let aux = map.get(company.category.name);
                aux ++;
                map.set(company.category.name, aux);``
            }
        });

        map.forEach((value, key) => {
            const li = document.createElement('li');
            li.textContent = `${key} - ${value}`;
            li.addEventListener ("click", () =>{ Page.companiesList(key)});
            ul.appendChild(li);
        });

        nav.appendChild(ul);
        footer.appendChild(nav);
        document.body.appendChild(footer);
    }
};