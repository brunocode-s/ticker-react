import { useState } from "react";
import { createTicket } from "../../services/ticketService";

export default function TicketForm({ tickets, setTickets }) {
  const [title, setTitle] = useState("");
  const [status, setStatus] = useState("open");

  const handleAdd = () => {
    if (!title.trim()) return alert("Title is required");
    const newTicket = createTicket(title, status);
    setTickets([...tickets, newTicket]);
    setTitle("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100 mb-8">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Create New Ticket</h2>

      <div className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Enter ticket title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyPress={handleKeyPress}
          className="flex-1 px-4 py-3 border text-black border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        />

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="px-3 py-3 border border-gray-300 text-black rounded-xl bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
        >
          <option value="open">Open</option>
          <option value="in_progress">In Progress</option>
          <option value="closed">Closed</option>
        </select>

        <button
          onClick={handleAdd}
          className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg hover:scale-105 duration-200"
        >
          Add Ticket
        </button>
      </div>
    </div>
  );
}
