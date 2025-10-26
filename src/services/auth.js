export async function registerUser(email, password) {
  const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
  if (users.find((u) => u.email === email)) {
    return { success: false, message: "Email already registered." };
  }

  const newUser = { email, password };
  localStorage.setItem("ticketapp_users", JSON.stringify([...users, newUser]));
  return { success: true, user: newUser };
}

export async function loginUser(email, password) {
  const users = JSON.parse(localStorage.getItem("ticketapp_users")) || [];
  const user = users.find((u) => u.email === email && u.password === password);

  if (user) {
    localStorage.setItem("ticketapp_session", JSON.stringify(user));
    return { success: true, user };
  } else {
    return { success: false, message: "Invalid credentials." };
  }
}
