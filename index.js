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
    'src/screens/companies/companiesRegister/companiesRegister.js',
    './home.js'
  ]) {
    const script = document.createElement("script");
    script.setAttribute("src", `./${file}`);
    document.head.appendChild(script);
  }


  window.addEventListener('load', () => {
    
    // Header();
    window.Page.home.addHeader();
    
    window.main = document.createElement('main');
    document.body.appendChild(main);
    
    window.Page.home.addFooter();
    // Page.home();

    // Footer();

    // myFramework.loadCss('styles.css');

    CallCSS('./src/styles/lists.css');
    CallCSS('./src/screens/category/categoryList/categoryList.css');
    CallCSS("./src/screens/category/categoryRegister/categoryRegister.css");
    CallCSS('./src/screens/companies/companiesList/companiesList.css');
    CallCSS('./src/screens/companies/companiesRegister/companiesRegister.css');
  });

})();