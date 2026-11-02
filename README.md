# Marco Gallardo Portfolio: Laravel + Inertia.js + React

Public portfolio (React + Tailwind) with a database-driven **Projects CRUD** and server-side validation.

**Stack:** Laravel 13 · Inertia.js 2 · React 18 · Tailwind CSS 3 · Vite · SQLite

## Requirements

* PHP 8.3+ with `sqlite3`, `mbstring`, `xml`, `fileinfo` extensions
* Composer 2
* Node.js 20+ and npm

## Setup

```bash
git clone <this-repo-url> marco-portfolio
cd marco-portfolio

composer install
cp .env.example .env
php artisan key:generate

touch database/database.sqlite
php artisan migrate --seed        # creates tables + 3 sample projects
php artisan storage:link          # makes uploaded images public

npm install
npm run dev                       # leave this running (Vite)
```

In a second terminal:

```bash
php artisan serve
```

* Public portfolio: http://127.0.0.1:8000
* Manage projects (CRUD): http://127.0.0.1:8000/projects

For a production-style build, run `npm run build` instead of `npm run dev`.

> The contact form uses `MAIL_MAILER=log`, so messages are written to `storage/logs/laravel.log`.
> Set real SMTP values in `.env` to send actual email.

## Where things are

| What | File |
|---|---|
| Migration | `database/migrations/2026_11_01_000000_create_projects_table.php` |
| Model | `app/Models/Project.php` |
| Controller + validation rules/messages | `app/Http/Controllers/ProjectController.php` |
| Public page controller | `app/Http/Controllers/PortfolioController.php` |
| Routes | `routes/web.php` |
| CRUD pages | `resources/js/Pages/Projects/{Index,Create,Edit}.jsx` |
| Public page | `resources/js/Pages/Portfolio.jsx` |
| Components | `resources/js/Components/` (ProjectForm, FormField, AdminLayout, Navbar, Footer, SectionTitle, ProjectCard) |
| Flash messages shared to React | `app/Http/Middleware/HandleInertiaRequests.php` |
| Inertia setup | `resources/js/app.jsx`, `resources/views/app.blade.php`, `bootstrap/app.php` |
| Portfolio text content | `config/portfolio.php` |
