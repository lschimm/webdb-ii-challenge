// make the endpoints
const express = require("express");

// const knexConfig = require("../knexfile.js");
// const db = knex(knexConfig.development);

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const cars = await db("cars");
    res.json(cars);
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve cars" });
  }
});

router.delete("/:id", async (req, res) => {});

// post

router.post("/", async (req, res) => {
  try {
    const carData = req.body;
    const [id] = await db("cars").insert(carData);
    const newCarEntry = await db("cars").where({ id });

    res.status(201).json(newCarEntry);
  } catch (err) {
    res.status(500).json({ message: "Failed to store data :(" });
  }
});

module.exports = router;
