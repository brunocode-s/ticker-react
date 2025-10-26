export function createTicket(title, status) {
    const tickets = JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    const newTicket = { id: Date.now(), title, status };
    localStorage.setItem("ticketapp_tickets", JSON.stringify([...tickets, newTicket]));
    return newTicket;
  }
  
  export function deleteTicket(id) {
    const tickets = JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
    const filtered = tickets.filter((t) => t.id !== id);
    localStorage.setItem("ticketapp_tickets", JSON.stringify(filtered));
  }
  
  export function getTickets() {
    return JSON.parse(localStorage.getItem("ticketapp_tickets")) || [];
  }
  