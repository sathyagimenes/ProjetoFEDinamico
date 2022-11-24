groupCode = '3513d2d8-d47e-4da4-a61e-0ed144dd1c7f';
const baseURL =
  'http://estabelecimentos.letscode.dev.netuno.org:25390/services/';

getCategoryBody = JSON.stringify({
  text: '',
  group: {
    uid: groupCode,
  },
});

getCompaniesBody = JSON.stringify({
  text: '',
  group: {
    uid: groupCode,
  },
});

async function CallApi({ method = 'POST', service, body }) {
  try {
    const response = await fetch(`${baseURL}${service}`, {
      method: method.toUpperCase(),
      headers: {
        'Content-Type': 'application/json'
      },
      body,
    });

    if (!response.ok) {
      console.error('Ocorreu um erro: ', response);
      return [];
    }

    const data = await response.json();
    if (data) {
      return data;
    }
    return;
  } catch (error) {
    console.log('Erro na comunicação:', error);
  }
};