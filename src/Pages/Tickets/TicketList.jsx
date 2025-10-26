export default function TicketList({ tickets, onDelete }) {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {tickets.length > 0 ? (
        tickets.map((t) => (
          <div
            key={t.id}
            className="bg-white shadow-lg rounded-2xl p-6 flex flex-col justify-between border border-gray-100 hover:shadow-xl transition-all hover:scale-105 duration-300"
          >
            <div>
              <h3 className="font-bold text-xl text-gray-800 mb-3">{t.title}</h3>
              <span
                className={`inline-block px-4 py-1.5 rounded-full text-white text-sm font-medium ${
                  t.status === "open"
                    ? "bg-gradient-to-r from-green-500 to-emerald-600"
                    : t.status === "in_progress"
                    ? "bg-gradient-to-r from-amber-500 to-orange-600"
                    : "bg-gradient-to-r from-gray-500 to-gray-600"
                }`}
              >
                {t.status.replace("_", " ").toUpperCase()}
              </span>
            </div>

            <button
              onClick={() => onDelete(t.id)}
              className="mt-6 w-full bg-red-50 text-red-600 font-semibold py-2.5 rounded-xl hover:bg-red-100 transition-all border border-red-200"
            >
              Delete Ticket
            </button>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center py-20">
          <p className="text-gray-500 text-lg">No tickets found</p>
          <p className="text-gray-400 text-sm mt-2">
            Create your first ticket to get started
          </p>
        </div>
      )}
    </div>
  );
}
