let token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k"

export async function getTodos() {
  const responce = await fetch('https://wedev-api.sky.pro/api/v2/todos', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });
  const data = await responce.json();
  return data;
}

export async function auth(login, passwd) {
  const responce = await fetch('https://wedev-api.sky.pro/api/user/login', {
    method: "POST",
    body: JSON.stringify({
        "login": login,
        "password": passwd
    })
  });
  const data = await responce.json();
  data.user ? token = data.user.token : token = ''
  return data;
}

export async function create(name, login, passwd) {
  const responce = await fetch('https://wedev-api.sky.pro/api/user', {
    method: "POST",
    body: JSON.stringify({
        "login": login,
        "password": passwd,
        "name": name
    })
  });
  const data = await responce.json();
  return data;
}

export async function createTodo(res) {
  const responce = await fetch('https://wedev-api.sky.pro/api/v2/todos', {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
        "text": res.text
    })
  });
  const data = await responce.json();
  return data;
}