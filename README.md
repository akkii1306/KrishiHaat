# KrishiHaat

A polished, production-aware MERN e-commerce platform built for farmers to browse and purchase agricultural products (seeds, tools, fertilizers) with a focus on scalability, consistency, and engineering best practices.

## Key features
- JWT-based authentication and role-based access (Admin / User)
- Product listing with server-side pagination, filtering and caching
- Cart and checkout flow with transactional order creation
- Admin order lifecycle enforced by a state machine (PLACED → CONFIRMED → SHIPPED → DELIVERED / CANCELLED)
- Redis cache-aside pattern to reduce DB load
- Centralized error handling, modular MVC structure, and request logging

## Tech stack
- Frontend: React, Tailwind CSS, Vite
- Backend: Node.js, Express, Mongoose
- Database: MongoDB (Atlas)
- Cache: Redis
- Storage: Cloudinary (images)

## Repo layout
- `backend/` – Express API with `server.js` as the only backend entrypoint, plus models, controllers, middleware, config, routes, and utils
- `client/` – React app (Vite + Tailwind)

## Backend structure
- `server.js` wires the API together and starts the server.
- `controllers/` contain request handling logic.
- `routes/` define HTTP endpoints.
- `models/` hold MongoDB schemas.
- `middleware/` handles auth and error flow.
- `config/` contains database and cache setup.
- `utils/` keeps reusable helpers and query helpers.

## Quickstart (development)

1. Clone repository

```bash
git clone https://github.com/akkii1306/KrishiHaat.git
cd KrishiHaat/backend
```

2. Install dependencies

```bash
npm install
```

3. Create a `.env` in `backend/` containing:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
REDIS_URL=redis://localhost:6379
FRONTEND_URL=http://localhost:5173
CLOUDINARY_URL=your_cloudinary_url
PORT=5000
NODE_ENV=development
```

4. Start Redis (Docker recommended)

```powershell
docker run -d -p 6379:6379 --name redis-cache redis
```

5. Start backend

```bash
npm run dev
# or
node server.js
```

6. Start client (in a new terminal)

```bash
cd ../client
npm install
npm run dev
```

Open the frontend at the address printed by Vite (usually `http://localhost:5173`).

## Environment & connectivity notes
- If you see `querySrv ENOTFOUND` when starting the server, your local DNS cannot resolve Atlas SRV records. Use the non-SRV connection string from MongoDB Atlas or ensure your DNS/network allows SRV lookups.
- If Redis reports `ECONNREFUSED`, start a local Redis instance (Docker or WSL) or set `REDIS_URL` to a reachable Redis server.

## Useful commands
- Run backend tests (if present): `npm test`
- Lint / format: use the project's eslint/prettier config (if configured)
- Remove sensitive files from git index after adding them to `.gitignore`:

```bash
git rm --cached path/to/file
git commit -m "Remove sensitive file from repo"
```

To fully remove secrets from history, use `git filter-repo` or BFG (careful—this rewrites history).

## Contributing
- Fork the repo, create a feature branch, and open a pull request. Keep changes small and well-documented.

## License & author
This project was created by Akanksha Kumari. Add license information here if desired.

---

