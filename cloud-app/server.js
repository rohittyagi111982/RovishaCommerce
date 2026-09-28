import express from "express";
import jsonServer from "json-server";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const port = process.env.PORT || 3000;

// JSON Server
const router = jsonServer.router(
    path.join(__dirname, "db.json")
);

const middlewares = jsonServer.defaults();

// Mock API
app.use("/api", middlewares, router);

// Angular application
app.use(
    express.static(
        path.join(__dirname, "public")
    )
);

// Angular SPA fallback
app.get("*", (req, res) => {
    res.sendFile(
        path.join(__dirname, "public", "index.html")
    );
});

app.listen(port, "0.0.0.0", () => {
    console.log(`Server running on port ${port}`);
});