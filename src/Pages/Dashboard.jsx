import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { getTickets } from "../services/ticketService";

export default function Dashboard() {
  const [stats, setStats] = useState({
    total: 0,
    open: 0,
    closed: 0,
  });

  useEffect(() => {
    const tickets = getTickets();
    const total = tickets.length;
    const open = tickets.filter((t) => t.status === "open").length;
    const closed = tickets.filter((t) => t.status === "closed").length;

    setStats({ total, open, closed });
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 max-w-[1440px] mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          <StatCard value={stats.total} label="Total Tickets" color="text-blue-600" />
          <StatCard value={stats.open} label="Open Tickets" color="text-green-600" />
          <StatCard value={stats.closed} label="Closed Tickets" color="text-gray-600" />
        </div>

        <div className="mt-6 text-center">
          <Link
            to="/tickets"
            className="inline-block bg-linear-to-r from-blue-600 to-indigo-600 !text-white px-8 py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-md hover:shadow-lg"
          >
            Go to Tickets
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function StatCard({ value, label, color }) {
  return (
    <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-lg transition-shadow">
      <h2 className={`text-3xl font-bold ${color}`}>{value}</h2>
      <p className="text-gray-600 mt-1">{label}</p>
    </div>
  );
}
