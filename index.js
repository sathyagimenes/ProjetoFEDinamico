(() => {
  window.Page = {};

  for (const file of [
    "src/common/filters.js",
    "src/common/forms.js",
    "src/common/services.js",
    "src/common/utils.js",
    "src/screens/category/categoryList/categoryList.js",
    'src/screens/category/categoryRegister/categoryRegister.js',
    'src/screens/companies/companiesList/companiesList.js',
    'src/screens/companies/companiesRegister/companiesRegister.js'
  ]) {
    const script = document.createElement("script");
    script.setAttribute("src", `./${file}`);
    document.head.appendChild(script);
  }


  window.addEventListener('load', () => {
    
    // Header();

    const header = document.createElement('header');
    const topnav = document.createElement('div');
    topnav.classList.add('topnav');
    const home = document.createElement('a');
    home.setAttribute('onclick', '');
    home.textContent = "Home";
    const categoryListLink = document.createElement('a');
    categoryListLink.setAttribute('style', 'cursor: pointer;');
    categoryListLink.textContent = "Lista de Categorias";
    categoryListLink.addEventListener('click', () => {
      Page.categoryList(); 
    })
    const categoryRegisterLink = document.createElement('a');
    categoryRegisterLink.setAttribute('style', 'cursor: pointer;');
    categoryRegisterLink.textContent = "Registrar Categoria";
    categoryRegisterLink.addEventListener('click', () => {
      Page.categoryRegister(); 
    })
    const companiesListLink = document.createElement('a');
    companiesListLink.setAttribute('style', 'cursor: pointer;');
    companiesListLink.textContent = "Lista de Estabelecimentos";
    companiesListLink.addEventListener('click', () => {
      Page.companiesList(); 
    });
    const companiesRegisterLink = document.createElement('a');
    companiesRegisterLink.setAttribute('style', 'cursor: pointer;');
    companiesRegisterLink.textContent = "Registrar Estabelecimento";
    companiesRegisterLink.addEventListener('click', () => {
      Page.companiesRegister(); 
    })
    document.body.appendChild(header);
    header.appendChild(topnav);
    topnav.append(home, categoryListLink, categoryRegisterLink, companiesListLink, companiesRegisterLink);


    window.main = document.createElement('main');
    document.body.appendChild(main);

    // Page.home();

    // Footer();

    // myFramework.loadCss('styles.css');

    CallCSS('./src/styles/lists.css');
    CallCSS('./src/screens/category/categoryList/categoryList.css');
    CallCSS("./src/screens/category/categoryRegister/categoryRegister.css");
    CallCSS('./src/screens/companies/companiesList/companiesList.css');

  });

})();