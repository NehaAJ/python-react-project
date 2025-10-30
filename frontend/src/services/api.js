const BASE_URL = "http://127.0.0.1:8000";

export async function getUsers() {
  const res = await fetch(`${BASE_URL}/users`);
  const data = await res.json();
  return data.users;
}

export async function addUser(user) {
  const res = await fetch(`${BASE_URL}/users`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data.user;
}
