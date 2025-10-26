# Ticket Easy App — React Version

A complete **Ticket Management Web Application** built with **React + Vite + Tailwind CSS**.  
Implements authentication, a protected dashboard, and full CRUD ticket management with consistent design across all framework versions.

---

## Tech Stack

- **Frontend:** React (Vite)
- **Styling:** Tailwind CSS
- **Icons:** `react-icons`
- **Routing & Navigation:** React Router
- **State Management:** LocalStorage-based session and data
- **Notifications:** Toast messages using built-in custom `Toaster` component

---
# Core Features

### Landing Page
- Wavy background and decorative circles (CSS clip-path).
- “Login” and “Get Started” buttons linking to auth pages.
- Responsive layout (max width: 1440px).

### Authentication (Login / Signup)
- Client-side validation.
- Toast notifications for invalid inputs.
- Stores session in `localStorage.ticketapp_session`.

### Dashboard
- Displays ticket statistics (Total, Open, Resolved).
- Protected — redirects to `/login` if no valid session.
- Logout clears localStorage and redirects to landing.

### Ticket Management
- CRUD operations (Create, Read, Update, Delete).
- Validates `title` and `status` (`open`, `in_progress`, `closed`).
- Inline validation + success/error toasts.

---

## Setup & Run

```bash
# Install dependencies
npm install

# Run in development
npm run dev

# Build for production
npm run build
