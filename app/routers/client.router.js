const express = require("express");

const router = express.Router();

router.get("/", (req, res) => res.json({ message: "GET request" }));
router.post("/", (req, res) => res.json({ message: "POST request" }));
router.get("/:id", (req, res) => res.json({ message: "GET request" }));
router.put("/:id", (req, res) => res.json({ message: "PUT request" }));
router.delete("/:id", (req, res) => res.json({ message: "DELETE request" }));

module.exports = router;
