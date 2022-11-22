const groupCode = "3513d2d8-d47e-4da4-a61e-0ed144dd1c7f";
const baseURL =
  "http://estabelecimentos.letscode.dev.netuno.org:25390/services/";

async function GetCategories() {
  const response = await fetch(`${baseURL}category/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response.ok) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

async function EditCategories({uid, code, name}) {
  const response = await fetch(`${baseURL}category`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      uid,
      code,
      name,
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response.ok) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

async function DeleteCategories(uid) {
  const response = await fetch(`${baseURL}category`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      group: {
        uid: groupCode,
      },
      uid
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });  

  if (!response.ok) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

async function GetCompanies() {
  const response = await fetch(`${baseURL}establishment/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response.ok) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

async function GetCompaniesByCategory(categoryCode) {
  const response = await fetch(`${baseURL}establishment/list`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      text: "",
      category: {
        uid: categoryCode,
      },
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response.ok) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

async function PostCategory({ id, name }) {
  const response = await fetch(`${baseURL}category`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      code: id,
      name: name,
      group: {
        uid: groupCode,
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response.ok) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

async function PostCompany({ category, name, email, phone, cep, address }) {
  const response = await fetch(`${baseURL}establishment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      address: address,
      name: name,
      group: {
        uid: groupCode,
      },
      email: email,
      phone: phone,
      postal_code: cep,
      category: {
        uid: category
      },
    }),
  }).catch((error) => {
    console.log("Erro na comunicação:", error);
  });

  if (!response.ok) {
    errorHandler(response);
    return [];
  }

  return await response.json();
}

function errorHandler(response) {
  console.log("Erro : ", response.status, " - ", response.statusText);
}
