import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

app.post("/api/auth/login", (req, res) => {
    const { email, password } = req.body;

    // Fake user (for now)
    if (email === "test@example.com" && password === "password") {
        return res.json({
            user: { id: 1, email },
            token: "fake-jwt-token",
        });
    }

    return res.status(401).json({ message: "Invalid credentials" });
});

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});
