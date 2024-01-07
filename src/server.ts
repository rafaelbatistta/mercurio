import express from "express";
import { productsRoutes } from "./routes/products";
import { authenticateRoutes } from "./routes/authenticate";

const app = express();

app.use(express.json());

app.use("/products", productsRoutes());
app.use("/authenticate", authenticateRoutes());

app.listen(3333, () => console.log("Server is running!"));
