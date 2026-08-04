# Department of CSE — SGGS Nanded

A complete frontend for the Department of Computer Science & Engineering website + ERP portal, built with React 19, TypeScript, Vite, Tailwind CSS v4, and Framer Motion.

## Getting Started

```bash
npm install
npm run dev       # start dev server
npm run build     # production build → dist/
npm run preview   # preview the production build
```

## Tech Stack

React 19 · TypeScript · Vite · Tailwind CSS v4 · Framer Motion · GSAP (hero only) · React Router DOM · React Hook Form + Zod · Recharts · Lucide Icons · React Hot Toast

## Structure

```
src/
  components/
    layout/        Navbar, Footer, CommandPalette, BackToTop, Breadcrumbs, AuthLayout, LoadingScreen
    ui/             Button, Card, Badge, Input, SectionHeading, PageHeader, EmptyState, Skeleton, SocialIcons
    home/           Hero (canvas node network + GSAP) and all homepage sections
    dashboard/      DashboardLayout (shared sidebar/topbar), StatCard, ModulePlaceholder, ProtectedRoute
  context/          ThemeContext (dark/light), AuthContext (demo role-based session, no backend)
  data/             content.ts — all dummy data for the entire site
  pages/            Public pages, auth pages, and dashboard/{student,faculty,hod} pages
```

## Demo Login

The Login page has no real backend — pick a role (Student / Faculty / HOD), enter any email/password (6+ characters), and you'll be dropped into that role's dashboard with a matching demo identity and sidebar.

## What's fully built vs. scaffolded

Given the scope of the original spec (25+ public pages and three full ERP dashboards), everything **routes**, **renders**, and is **visually complete** end to end. Depth varies by section:

- **Fully interactive with real dummy data + charts + working local state:** Home, About, Academics, Faculty (directory + profile), Research, Laboratories, Placements, Student Life, Tech Hub, Alumni, Events, News, Gallery, Contact, full Auth flow (Login/Register/OTP/Forgot-Reset Password), Student dashboard (Overview, Attendance, Results, Assignments, Profile), Faculty dashboard (Overview, Attendance, Leave), HOD dashboard (Overview, Approvals, Analytics), shared Settings.
- **Wired and styled, using a consistent "module placeholder" state** (ready for backend integration, not broken links): the remaining sidebar items across all three dashboards — e.g. Subjects, Notes, Timetable, Fee Status, Resume Builder, Portfolio, Discussion Forum, Question Bank, Research Funding, Faculty/Student Management, etc. Each renders a titled page with an empty-state illustration rather than a 404.

## Design System

Colors, type (Poppins/Inter/Space Grotesk), and component patterns follow the brief's palette exactly — implemented via Tailwind v4 `@theme` tokens in `src/index.css`. Dark mode is a class-based toggle persisted to `localStorage`.

## Where things live (quick reference)

This is a **TypeScript** project (per the requested tech stack), so every component file uses `.tsx`, not `.jsx` — e.g. the placements page is `src/pages/Placements.tsx`, not `Placement.jsx`.

| Feature | File(s) |
|---|---|
| Placements page (public) | `src/pages/Placements.tsx` → route `/placements` |
| Student Portal | `src/pages/dashboard/student/` (`StudentDashboard.tsx` = shell/sidebar, `Overview.tsx`, `Attendance.tsx`, `Results.tsx`, `Assignments.tsx`, `Profile.tsx`) → route `/dashboard/student` |
| Faculty Portal | `src/pages/dashboard/faculty/` (`FacultyDashboard.tsx` = shell/sidebar, `Overview.tsx`, `Attendance.tsx`, `Leave.tsx`) → route `/dashboard/faculty` |
| HOD Portal | `src/pages/dashboard/hod/` (`HodDashboard.tsx` = shell/sidebar, `Overview.tsx`, `Approvals.tsx`, `Analytics.tsx`) → route `/dashboard/hod` |
| Routing that wires all of the above together | `src/App.tsx` |

To reach any portal: run the app, go to `/login`, pick a role tab (Student / Faculty / HOD), enter any email + a 6+ character password, and submit — you'll land on that role's dashboard.

## Notes

- Animated number counters (stats, placements, dashboard cards) use a small custom `CountUp` component (`src/components/ui/CountUp.tsx`) built on `framer-motion` rather than the `react-countup` package — that package's UMD-only build triggers a Vite dependency pre-bundling bug that crashes the page (`Element type is invalid ... got: object`), so it was removed entirely.
- `recharts` is pinned to the `2.x` line (not `3.x`), since v3 pulls in Redux internally and has breaking API changes from what this project was built against.

- No backend: all data lives in `src/data/content.ts`; forms simulate submission with a short delay + toast.
- Auth/session state is in-memory via React Context — refreshing the page logs you out (expected for a frontend-only demo).
- Public pages are code-split with `React.lazy`; the Home page loads eagerly for a fast first paint.
