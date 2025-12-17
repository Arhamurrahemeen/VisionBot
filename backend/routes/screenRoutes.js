const express = require("express");
const Screen = require("../models/Screen");
const router = express.Router();

router.get("/:screenId", async (req, res) => {
  try {
    const screen = await Screen.findById(req.params.screenId);
    if (!screen) {
      return res.status(404).json({ error: "Screen not found" });
    }
    res.json(screen.blocks);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
