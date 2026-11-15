# Modern Business Full-Stack Web Application

A professional, full-stack digital agency and business web platform built with a unified monorepo architecture, featuring a modern Next.js frontend and a robust Django REST framework backend backed by PostgreSQL[cite: 3].

---

## 🛠️ Tech Stack

### Frontend (`/frontend`)
* **Framework:** Next.js (App Router)
* **Styling:** Tailwind CSS (Custom slate-grey theme)
* **Language:** JavaScript / TypeScript

### Backend (`/backend`)
* **Framework:** Python / Django & Django REST Framework (DRF)
* **Database:** PostgreSQL (with local pgAdmin support)
* **API Architecture:** RESTful endpoints for services, contacts, and portfolios

---

## 📂 Project Structure

```text
modern-business-fullstack/
├── backend/              # Django REST API backend
│   ├── config/           # Django project settings & URL routing
│   ├── core/             # API models, serializers, views, and migrations
│   ├── manage.py         # Django utility script
│   └── requirements.txt  # Python dependencies
├── frontend/             # Next.js frontend application
│   ├── src/app/          # App Router pages (Home, About, Services, Contact)
│   ├── src/components/   # Reusable UI components (Navbar, Footer, etc.)
│   └── package.json      # Node.js dependencies
└── .gitignore            # Root gitignore protecting secrets and build files