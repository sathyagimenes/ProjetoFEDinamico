const groupCode = '3513d2d8-d47e-4da4-a61e-0ed144dd1c7f';

async function GetCategories () {
  const response = await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/category/list', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: "",
      group: {
        uid: groupCode
      }
    })
  }).catch(error => {
    console.log('Erro na comunicação:', error);
  });
  
  return await response.json();
}

async function GetCompanies () {
  const response = await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: "",
      group: {
        uid: groupCode
      }
    })
  }).catch(error => {
    console.log('Erro na comunicação:', error);
  });
  
  return await response.json();
}

async function GetCompaniesByCategory (categoryCode) {
  const response = await fetch('http://estabelecimentos.letscode.dev.netuno.org:25390/services/establishment/list', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      text: "",
      category: {
        uid: categoryCode
      },
      group: {
        uid: groupCode
      }
    })
  }).catch(error => {
    console.log('Erro na comunicação:', error);
  });
  
  return await response.json();
}