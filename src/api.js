const token = "ksdfsksdfjfsdjk"

export async function getTodos() {
  const responce = await fetch('https://wedev-api.sky.pro/api/v2/todos', {
    headers: {
      Authorization: "123456"
    }
  });
  const data = await responce.json();
  return data;
}