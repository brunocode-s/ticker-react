import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import Login from "./Pages/Auth/Login";
import Signup from "./Pages/Auth/Signup";
import Dashboard from "./Pages/Dashboard";
import TicketList from "./Pages/Tickets/TicketPage";

export default function App() {
  const [session, setSession] = useState(() =>
    JSON.parse(localStorage.getItem("ticketapp_session"))
  );

  useEffect(() => {
    const handleStorage = () => {
      setSession(JSON.parse(localStorage.getItem("ticketapp_session")));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth/login" element={<Login setSession={setSession} />} />
        <Route path="/auth/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={session ? <Dashboard /> : <Navigate to="/auth/login" />}
        />
        <Route
          path="/tickets"
          element={session ? <TicketList /> : <Navigate to="/auth/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}
