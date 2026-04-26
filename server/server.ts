import "dotenv/config";
import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import { clerkMiddleware } from "@clerk/express";
import { clerkWebhook } from "./controllers/webhooks.js";
import makeAdmin from "./scripts/makeAdmin.js";
import ProductRouter from "./routes/productRoutes.js";
import CartRouter from "./routes/cartRoutes.js";
import Order from "./models/Order.js";
import OrderRouter from "./routes/ordersRoutes.js";
import AddressRouter from "./routes/addressRoutes.js";
import AdminRouter from "./routes/adminRoutes.js";
import { seedProducts } from "./scripts/seedProducts.js";


const app = express();

// connect to mongoDB

await connectDB()

app.post('/api/clerk', express.raw({type: 'application/json'}), clerkWebhook)

// Middleware
app.use(cors());
app.use(express.json());
app.use(clerkMiddleware());

const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Server is Live!");
});

app.use("/api/products", ProductRouter)
app.use("/api/cart", CartRouter)
app.use("/api/orders", OrderRouter)
app.use("/api/addresses", AddressRouter)
app.use("/api/admin", AdminRouter)

await makeAdmin(); 

// Seed dummy products if no products are present
// try {
//   await seedProducts(process.env.MONGODB_URI as string);
// } catch (error) {
//   console.error("Failed to seed products:", error);
// }

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
