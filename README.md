# 📝 Blogging Platform - Backend

This is the **backend** of the Blogging Platform built for the **CDAC 2025 Coding Challenge** using **Node.js**, **Express.js**, and **MySQL**.

---

## 🧠 My Approach

I followed a layered architecture to ensure clarity and maintainability:

- Separated concerns into **controllers**, **routes**, **models**, and **middleware**
- Used **JWT-based authentication** to protect user sessions
- Implemented **RESTful APIs** to perform blog and user actions
- Tested each endpoint with Postman and connected it to the frontend with Axios

---

## 🧠 AI Usage

I used **ChatGPT** to:
- Understand how to structure the Express backend
- Write authentication logic with JWT
- Handle MySQL queries with `mysql2` package
- Refactor code for clarity and best practices
- Write and refine this `README.md`

---

## 🚀 Tech Stack

- Node.js
- Express.js
- MySQL
- JWT (Authentication)
- bcryptjs
- dotenv

---

## 📁 Folder Structure
Blogging_Backend/
├── server.js
├── .env
├── config/
│ └── db.js
├── controllers/
├── models/
├── middleware/
├── routes/
└── .gitignore

