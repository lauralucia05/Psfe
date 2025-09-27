# 📘 Project Best Practices

## 1. Project Purpose
Psyencia is a MERN-based healthcare platform providing patient–doctor appointment scheduling, messaging, referrals, educational content, and payments. It comprises:
- Backend: Node.js/Express API with MongoDB (Mongoose), Stripe/PayPal payments, JWT auth, Socket.IO messaging.
- Frontend: React (Vite) + Tailwind for patient-facing UI.
- Admin: Separate React (Vite) app for administrative workflows.
- Prisma folder: A PostgreSQL schema (not currently wired to the Node runtime) for a richer RDBMS model or future migration.

## 2. Project Structure
- Root
  - backend/ — Express app with controllers, routes, middleware, models, config
    - server.js — main entrypoint, Express + Socket.IO initialization
    - config/mongodb.js — MongoDB connection
    - controllers/ — request handlers and business logic (auth, appointments, payments, messages, referrals, content)
    - routes/ — route definitions per domain (user, doctor, admin, messages, referrals, payments)
    - middleware/ — auth (user/doctor/admin), multer for file uploads
    - models/ — Mongoose models (User, Doctor, Appointment, Referral, Message, EducationalContent)
    - tests/ — Postman collection (manual/integration testing)
    - package.json — ESM, runtime deps
  - frontend/ — React (Vite) patient UI
    - src/components — presentational/layout components
    - src/pages — route pages (Home, Doctors, Appointment, Messaging, Dashboards, etc.)
    - src/context — AppContext (API/data), SocketContext (Socket.IO client)
    - tailwind.config.js, postcss.config.js — Tailwind setup
  - admin/ — React (Vite) admin UI (mirrors frontend structure)
  - prisma/ — Prisma schema and migrations targeting PostgreSQL (currently unused by the Express server)
  - DEPLOYMENT_GUIDE.md — deployment instructions
  - README.md — general project info

Key entry points and configuration:
- backend/server.js — boots Express, registers routes, configures CORS, sessions, and Socket.IO.
- frontend/src/main.jsx + App.jsx — React entry and routes.
- admin/src/main.jsx + App.jsx — React admin entry and routes.
- .eslintrc.cjs present in frontend/admin for linting (ESM). Tailwind configured for styling.

## 3. Test Strategy
Current state:
- backend/tests/apiTests.postman_collection.json exists for manual API testing.
- No automated unit/integration/E2E tests checked in.

Recommendations:
- Backend
  - Framework: Jest + supertest for HTTP integration tests; mongodb-memory-server for Mongoose tests.
  - Structure: place tests alongside code as `__tests__` folders or `*.test.js` next to modules.
  - Mocking: mock external services (Stripe, PayPal SDKs, Socket.IO) using jest.mock; use nock for HTTP calls (axios).
  - Coverage: target 80%+; at least controllers/services and critical middleware.
  - Add a service layer between controllers and models to isolate business logic for easy unit testing.
- Frontend (patient/admin)
  - Framework: Vitest or Jest with React Testing Library for components and hooks; MSW for API mocks.
  - Structure: `src/**/__tests__` or `*.test.jsx` colocated with components/pages.
  - E2E: Cypress or Playwright to cover auth, booking, payments, messaging happy paths.
- CI
  - Add GitHub Actions to run lint + tests on PRs; publish coverage summary.

## 4. Code Style
- Language/runtime
  - ESM modules across the monorepo (`type: module`). Prefer async/await; avoid mixing callbacks.
  - Maintain consistent HTTP status usage (2xx/4xx/5xx) with unified error responses.
- Naming conventions
  - JavaScript: camelCase for variables/functions; PascalCase for React components and classes.
  - Files: React components as PascalCase .jsx; Express routers/controllers in camelCase with domain-based filenames (userRoute.js, userController.js).
- React/Tailwind
  - Keep components presentational vs. container split where helpful.
  - Prefer composition over deeply nested conditional JSX. Extract UI primitives for reuse.
  - Tailwind: favor utility-first classes; extract common patterns with component wrappers or class helpers.
- Comments/docs
  - Use JSDoc for exported functions; document route contracts (params/body/response shape).
  - Prefer self-explanatory names; reserve comments for non-obvious logic and caveats.
- Error handling
  - Use centralized Express error middleware (next(err)) with a standard response shape: `{ success: false, message, code?, details? }`.
  - In controllers, avoid mixed patterns: return proper status codes, e.g., 400 for validation, 401 for auth, 403 for authz, 404 not found, 409 conflicts, 500 internal.
- Security
  - Prefer Authorization: Bearer <token> header (standard) over custom `token` header.
  - Handle JWT in httpOnly, secure cookies where feasible; if using localStorage, mitigate XSS and CSRF (CSRF tokens, strict CORS, SameSite).
  - Sanitize/validate all inputs (see Validation below). Avoid logging secrets, tokens, PII.

## 5. Common Patterns
- Backend
  - Layering: routes -> controllers -> (services) -> models. Consider adding a `services/` layer to move logic out of controllers (e.g., booking algorithm, payment orchestration, rating aggregation).
  - Auth: JWT-based with role support (user/doctor/admin). Middleware populates `req.body.userId/userRole`; prefer `req.user` for clarity and to avoid mutating body.
  - Reusable responses: consistently return `{ success, data?, message? }` with proper HTTP codes.
  - Realtime: Socket.IO for messaging and typing indicators. Add Socket.IO middleware to verify JWT on connection and join rooms deterministically (e.g., `io.use(auth)` then `socket.join(user:<id>)`).
  - Payments: Stripe Checkout with follow-up verification; prefer webhook-based confirmation and idempotency keys for reliability.
- Frontend
  - Global state: React Context for API config (backendUrl), auth token, and user profile; separate SocketContext for realtime events.
  - API access: axios; attach token via interceptor to Authorization header; handle 401 globally to redirect to login.
  - Routing: react-router-dom v6; group routes by feature; lazy-load heavy pages.
  - Notifications: react-toastify for user feedback.

## 6. Do's and Don'ts
- Do
  - Use environment variables for secrets, URLs, allowed origins. Keep dev/staging/prod separate.
  - Validate request payloads with a schema validator (Joi/Celebrate, Zod, or Yup) at the route layer.
  - Standardize error handling and HTTP status codes.
  - Add rate limiting (express-rate-limit), basic security headers (helmet), and request logging (morgan/pino).
  - Use Mongoose indexes and lean() for read-heavy endpoints; paginate list endpoints.
  - Centralize date/time handling and timezones (store UTC, format in UI with user timezone).
  - Write integration tests for auth, booking, payments, messaging flows.
  - Version your API or maintain compatibility contracts when evolving.
- Don't
  - Don’t mutate `req.body` to store auth context; prefer `req.user` or `res.locals`.
  - Don’t hardcode CORS origin lists in code; use env-driven configuration.
  - Don’t return 200 for error scenarios; use appropriate HTTP codes.
  - Don’t trust client-side amounts for payments; compute on server and verify via provider (webhooks).
  - Don’t broadcast Socket.IO events without validating auth and room membership.

## 7. Tools & Dependencies
- Backend (Express/Mongoose)
  - express, cors, dotenv, express-session
  - mongoose (MongoDB ODM)
  - jsonwebtoken (JWT auth), bcrypt (passwords)
  - multer (uploads)
  - socket.io (realtime messaging)
  - stripe (payments); PayPal integration present via controller
  - validator (basic validation)
  - Recommended additions: helmet, express-rate-limit, morgan/pino, celebrate/joi or zod, winston/pino, supertest, jest
- Frontend (React/Vite/Tailwind)
  - react, react-router-dom, axios, react-toastify, socket.io-client
  - tailwindcss for styling
  - Recommended additions: React Testing Library + Vitest, MSW, Prettier
- Admin (React/Vite/Tailwind)
  - Similar stack to frontend; keep shared UI patterns as a separate package if reuse grows.
- Prisma
  - Prisma schema targets PostgreSQL and models richer healthcare domain entities (Appointments, Payments, Reviews, etc.). Currently unused by Express runtime; treat as future migration path or separate service.

Project setup
- Backend
  - Required env (.env):
    - PORT=4000
    - MONGODB_URI=mongodb+srv://...
    - JWT_SECRET=...
    - SESSION_SECRET=...
    - STRIPE_SECRET_KEY=...
    - CURRENCY=USD
    - ADMIN_EMAIL=...
    - ADMIN_PASSWORD=...
    - CORS_ORIGINS=http://localhost:5173,http://localhost:5174,https://your-frontend,https://your-admin
  - Start: `npm install && npm run start` within backend/
- Frontend/Admin
  - Required env (.env):
    - VITE_BACKEND_URL=http://localhost:4000
    - VITE_RECAPTCHA_SITE_KEY=...
  - Start: `npm install && npm run dev` in frontend/ and admin/

## 8. Other Notes
- API Conventions
  - Base path: `/api/**` per domain (user, doctor, admin, messages, referrals, educational-content, payments).
  - Prefer `Authorization: Bearer <jwt>` header; deprecate custom `token` header to standardize clients.
  - Response shape: `{ success: boolean, data?: any, message?: string }`; errors with appropriate HTTP codes.
- Security & Privacy
  - Avoid logging tokens/PII; replace `console.log` with structured logger and redact sensitive fields.
  - Implement account lockout/slowdown on multiple failed logins. Add password complexity rules.
  - Enable HTTPS in production and set secure cookie flags where used.
- Socket.IO
  - Add connection middleware: verify JWT, attach user to `socket.data.user`, and join `user:<id>` room. Enforce authorization on each event. Handle disconnect cleanup.
- Validation
  - Add per-route validators; e.g., for booking: doctor existence/availability, future time checks, slot overlap, and idempotency keys for retry-safe requests.
- Data integrity
  - Consider MongoDB transactions for multi-step updates (booking/rescheduling that touches appointment + doctor slots). Add indexes for frequent queries (userId, docId, date ranges).
- Payments
  - Prefer webhook-based confirmation for Stripe/PayPal; persist events, verify signatures, and mark payments idempotently. Never trust client-sent amounts.
- Observability
  - Introduce request IDs, structured logs, error tracking (Sentry), and basic metrics (Prometheus-compatible) over time.
- Migration/Prisma
  - If migrating to PostgreSQL/Prisma, plan incremental adoption by feature. Keep Mongoose and Prisma models isolated; avoid dual writes until a cutover plan exists.
- LLM Guidance
  - Use ESM imports/exports.
  - Follow folder conventions (controllers/routes/middleware/models on backend; components/pages/context on frontend).
  - Maintain TypeScript-friendly patterns even in JS (pure functions, clear shapes). If introducing TS, incrementally adopt in new modules.
  - Keep CORS, envs, and URLs configurable via environment variables, not hardcoded in code.
