# E-Commerce Project

A full-stack e-commerce application built with **React Native (Expo)** for the mobile client and **Node.js (Express)** with **MongoDB** for the backend.

## 🚀 Features

### Client (Mobile App)
- **User Authentication:** Secure login and signup using **Clerk**.
- **Product Discovery:** Browse products with categories and detailed views.
- **Cart Management:** Add, remove, and update quantities in the shopping cart.
- **Wishlist:** Save favorite items for later.
- **Checkout Process:** Seamless checkout flow for placing orders.
- **Order Tracking:** View order history and status.
- **Address Management:** Save and manage multiple delivery addresses.
- **Admin Dashboard:** Specialized UI for managing products and orders.
- **Theming:** Modern UI built with **NativeWind** (Tailwind CSS for React Native).

### Server (Backend API)
- **RESTful API:** Robust API built with Express.js and TypeScript.
- **Database:** Data persistence using **MongoDB** and **Mongoose**.
- **Authentication:** Middleware integration with **Clerk Express**.
- **Media Management:** Image uploads handled via **Cloudinary** and **Multer**.
- **Admin Routes:** Protected endpoints for administrative tasks.

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React Native (Expo)
- **Navigation:** Expo Router (File-based routing)
- **Styling:** NativeWind (Tailwind CSS)
- **State Management:** React Context API
- **Auth:** Clerk Expo
- **HTTP Client:** Axios

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **Database:** MongoDB
- **Authentication:** Clerk Express
- **File Storage:** Cloudinary

---

## 📁 Project Structure

```text
E-Commerce/
├── client/              # Expo Mobile App
│   ├── app/             # Expo Router pages
│   ├── components/      # Reusable UI components
│   ├── context/         # Context API (Cart, Wishlist, etc.)
│   └── constants/       # App constants and config
├── server/              # Express Backend
│   ├── controllers/     # Route logic
│   ├── models/          # Mongoose schemas
│   ├── routes/          # API endpoints
│   └── config/          # Database and service configs
└── README.md
```

---

## ⚙️ Getting Started

### Prerequisites
- Node.js (v18+)
- Expo CLI
- MongoDB Atlas account or local instance
- Clerk account (for Auth)
- Cloudinary account (for Images)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd E-Commerce
   ```

2. **Setup Server:**
   ```bash
   cd server
   npm install
   ```
   Create a `.env` file in the `server` directory and add:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   CLOUDINARY_CLOUD_NAME=your_name
   CLOUDINARY_API_KEY=your_key
   CLOUDINARY_API_SECRET=your_secret
   ```

3. **Setup Client:**
   ```bash
   cd ../client
   npm install
   ```
   Create a `.env` file (or update your `app.json`/config) with your Clerk keys:
   ```env
   EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_pub_key
   ```

---

## 🏃 Running the Application

### Start Backend
```bash
cd server
npm run server
```

### Start Frontend
```bash
cd client
npx expo start
```
Use the Expo Go app on your physical device or an emulator to run the project.

---

## 📜 License
This project is licensed under the [ISC License](LICENSE).
