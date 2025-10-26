import { useState } from "react";

export function useAuthStore() {
  const userFromStorage = JSON.parse(localStorage.getItem("ticketapp_session"));
  const [user, setUserState] = useState(userFromStorage);

  const setUser = (userData) => {
    localStorage.setItem("ticketapp_session", JSON.stringify(userData));
    setUserState(userData);
  };

  const logout = () => {
    localStorage.removeItem("ticketapp_session");
    setUserState(null);
  };

  return { user, setUser, logout };
}
