# Bike Servicing Management API

## Description

The **Bike Servicing Management API** is a backend application built with Node.js, Express, TypeScript, Prisma, and PostgreSQL. It provides a RESTful API for managing customers, bikes, and their service records. The API allows users to perform CRUD operations on customers, bikes, and service records, as well as mark service records as completed.

## Features

- Manage customers (create, read, update, delete).
- Manage bikes associated with customers.
- Manage service records for bikes, including marking them as completed.
- Error handling with custom error classes and global error middleware.
- Database integration using Prisma ORM with PostgreSQL.

---

## Installation Guide

### Prerequisites

- Node.js (v16 or higher)
- PostgreSQL
- npm or yarn

### Steps

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd bike-servicing-management-API
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   - Create a PostgreSQL database.
   - Add the database connection string to a `.env` file:
     ```
     DATABASE_URL=postgresql://<username>:<password>@<host>:<port>/<database>
     ```

4. Run Prisma migrations to set up the database schema:

   ```bash
   npx prisma migrate dev
   ```

5. Start the development server:

   ```bash
   npm run dev
   ```

6. The server will run on `http://localhost:8000`.

---

## API Endpoints

### Base URL

```
http://localhost:8000/api
```

### Customers

- **Create Customer**

  - **POST** `/customers`
  - **Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john.doe@example.com",
      "phone": "1234567890"
    }
    ```

- **Get All Customers**

  - **GET** `/customers`

- **Get Customer by ID**

  - **GET** `/customers/:customerId`

- **Update Customer**

  - **PUT** `/customers/:customerId`
  - **Body**:
    ```json
    {
      "name": "Updated Name"
    }
    ```

- **Delete Customer**
  - **DELETE** `/customers/:customerId`

---

### Bikes

- **Add Bike**

  - **POST** `/bikes`
  - **Body**:
    ```json
    {
      "brand": "Yamaha",
      "model": "R15",
      "year": 2025,
      "customerId": "customer-id"
    }
    ```

- **Get All Bikes**

  - **GET** `/bikes`

- **Get Bike by ID**
  - **GET** `/bikes/:bikeId`

---

### Service Records

- **Create Service Record**

  - **POST** `/services`
  - **Body**:
    ```json
    {
      "bikeId": "bike-id",
      "serviceDate": "2025-04-23T17:40:27+00:00",
      "description": "Change both tires"
    }
    ```

- **Get All Service Records**

  - **GET** `/services`

- **Get Service Record by ID**

  - **GET** `/services/:serviceId`

- **Mark Service Record as Completed**
  - **PUT** `/services/:serviceId/complete`
  - **Body**:
    ```json
    {
      "completionDate": "2025-04-25T17:40:27+00:00"
    }
    ```

---

## Project Structure

```
src/
├── app.ts                     # Express app setup
├── config/
│   └── prisma.config.ts       # Prisma client configuration
├── errors/
│   ├── ApiError.ts            # Custom error class
│   └── globalErrorHandler.ts  # Global error handler middleware
├── middlewares/
│   ├── notFound.middleware.ts # 404 handler middleware
│   └── validate.middleware.ts # Request validation middleware
├── modules/
│   ├── bike/                  # Bike module (controller, service, routes, interface)
│   ├── customer/              # Customer module (controller, service, routes)
│   └── serviceRecord/         # Service record module (controller, service, routes, interface)
├── routes/
│   └── index.ts               # Main router
├── utils/
│   ├── asyncHandler.ts        # Async error handling utility
│   └── sendResponse.ts        # Response utility
└── index.ts                   # Server entry point
```

---

## Technologies Used

- **Node.js**: JavaScript runtime.
- **Express**: Web framework for building APIs.
- **TypeScript**: Type-safe JavaScript.
- **Prisma**: ORM for database management.
- **PostgreSQL**: Relational database.
- **Zod**: Schema validation library.

---

## Postman Collection

A Postman collection is available in the file `bike-servicing-API.postman_collection.json` for testing the API endpoints.

---

## License

This project is licensed under the ISC License.
