import { useState, useEffect } from "react";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import TicketForm from "./TicketForm";
import TicketList from "./TicketList";
import { getTickets, deleteTicket } from "../../services/ticketService";

export default function TicketsPage() {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    setTickets(getTickets());
  }, []);

  const handleDelete = (id) => {
    deleteTicket(id);
    setTickets((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />

      <main className="flex-1 w-full mx-auto px-6 py-12 space-y-10">
        <TicketForm tickets={tickets} setTickets={setTickets} />
        <TicketList tickets={tickets} onDelete={handleDelete} />
      </main>

      <Footer />
    </div>
  );
}
