# Looma — Full‑Stack E‑Commerce

> A modern MERN e‑commerce application with a customer storefront, admin dashboard, and Node/Express API, built with React + Vite, MongoDB, and Cloudinary.

## Project Title
Looma — E‑Commerce Platform (Storefront + Admin + API)

## Brief One Line Summary
Feature‑complete e‑commerce stack: browse products, cart/checkout flow, and admin product/order management.

## Overview
Looma is a full‑stack e‑commerce project split into three apps:
- `Frontend/` — Customer storefront (React + Vite)
- `Admin/` — Admin dashboard to manage products and orders (React + Vite)
- `Backend/` — REST API (Express + MongoDB + Cloudinary)

It supports product listing, search, cart with size variants, authentication (JWT), order placement (COD), and an admin portal for product CRUD and order status updates. Images are uploaded to Cloudinary. Stripe/Razorpay dependencies are present and routes are scaffolded for future online payments.

## Problem Statement
Build a maintainable, modular e‑commerce system that enables:
- Customers to discover products, manage a cart, and place orders
- Admins to add/edit/remove products, and track/update orders
- A secure, scalable backend with image hosting and basic authentication

## Dataset
No external dataset required. Data is persisted in MongoDB collections:
- `users`, `products`, `orders`
- Product images stored on Cloudinary
- Products can be created via the Admin UI (acts as your data seeding tool)

## Tools and Technologies
- Frontend: React 19, Vite 7, React Router 7, Axios, React‑Toastify, Tailwind CSS 4
- Admin: React 19, Vite, React Router, Axios, React‑Toastify
- Backend: Node.js, Express 5, Mongoose 9, JWT, Bcrypt, Multer, Cloudinary, CORS, Dotenv
- Payments (scaffolded): Stripe, Razorpay
- Deployment: Vercel configs included (optional)

## Methods
- Auth: JWT‑based user auth; admin login via env‑configured credentials
- Products: Multer upload -> Cloudinary -> product record with image URLs
- Cart: Client state persisted to backend when authenticated
- Orders: COD flow implemented; status management from Admin
- Configuration: `.env` files per app; `VITE_BACKEND_URL` connects UIs to API

## Key Insights
- Clear separation of concerns (storefront/admin/api) simplifies iteration and deployment
- Cloudinary offloads image storage and delivery
- Environment‑driven configuration makes local and cloud setups consistent



## How to Run this project?

Prerequisites:
- Node.js 18+ and npm
- MongoDB connection string
- Cloudinary account (for image upload)

1) Clone and install dependencies

```bash
# from the repo root
cd Backend && npm install && cd ..
cd Frontend && npm install && cd ..
cd Admin && npm install && cd ..
```

2) Configure environment variables

Create `Backend/.env`:
```bash
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_key
CLOUDINARY_API_SECRET=your_cloudinary_secret
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=strongpassword


Create `Frontend/.env` and `Admin/.env`:
```bash
VITE_BACKEND_URL=http://localhost:PORT
```

3) Start the apps (in three terminals)

```bash
# Terminal 1 — API
cd Backend
npm run server   # uses nodemon (or `npm start` to run with node)

# Terminal 2 — Storefront
cd Frontend
npm run dev

# Terminal 3 — Admin
cd Admin
npm run dev
```

Access:
- Frontend: https://looma-frontend.netlify.app/ 
- Admin: https://looma-admin-one.vercel.app/
- Backend: https://looma-backend-eta.vercel.app/

## Results & Conclusion
- End‑to‑end flow works for browse → cart → place order (COD)
- Admin portal enables product CRUD and order status updates
- Architecture is ready for incremental additions like online payments and analytics

## Future Work
- Implement Stripe/Razorpay checkout + webhooks
- Pagination, filtering, and full‑text search on products
- Inventory management, reviews/ratings, wishlists
- Role‑based admin, audit logs, and analytics dashboards
- E2E and API test coverage; CI for lint/build/test

