# Rovisha Commerce - Frontend

API-driven Angular frontend for Rovisha Commerce.

## Requirements

- Node.js 20+
- Angular CLI 20+

## Configure API

Update:

`src/environments/environment.ts`

Example:

`apiBaseUrl: 'https://localhost:7001/api'`

Expected endpoints:

- GET /api/products
- GET /api/products/{id}
- GET /api/products?search=laptop
- GET /api/products?categoryId=5

## Run

```bash
npm install
npm start
```

The application does not contain hardcoded product data. Products are loaded from the backend API.
