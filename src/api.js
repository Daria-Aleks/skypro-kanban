let token = "asb4c4boc86gasb4c4boc86g37w3cc3bo3b83k4g37k3bk3cg3c03ck4k"

export async function getTodos() {
  const responce = await fetch('https://wedev-api.sky.pro/api/kanban', {
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

export async function createTodo(payload) {
  const responce = await fetch('https://wedev-api.sky.pro/api/kanban', {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      "title": payload.title,
      "topic": payload.topic,
      "status": "Без статуса",
      "description": payload.description,
      "date": payload.date,    
    })
  });
  const data = await responce.json();
  return data;
}

export async function changeTodo(id, task) {
  const responce = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({
      "title": task.title,
      "topic": task.topic,
      "status": task.status,
      "description": task.description,
      "date": task.date,
    })
  });
  const data = await responce.json();
  return data;
}

export async function deleteTodo(id) {
  const responce = await fetch(`https://wedev-api.sky.pro/api/kanban/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`
    },
  });
  const data = await responce.json();
  return data;
}