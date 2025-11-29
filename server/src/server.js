// server/src/server.js  (CommonJS Version — No warnings)

const express = require("express");
const cors = require("cors");
const path = require("path");
require("./config/firebase.cjs"); // stays CJS

const productRoutes = require("./routes/products.js");
const adminProductRoutes = require("./routes/adminProducts.js");
const authRoutes = require("./routes/auth.js");
const reviewRoutes = require("./routes/reviewRoutes.js");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 🔥 API ROUTES
app.use("/api/products", productRoutes);
app.use("/api/admin", adminProductRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/health", (_, res) => res.json({ status: "running" }));

app.listen(PORT, () => console.log(`🔥 Server running on http://localhost:${PORT}`));