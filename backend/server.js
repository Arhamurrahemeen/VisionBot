require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const screenRoutes = require("./routes/screenRoutes");

const app = express();

/* middleware */
app.use(cors({
  origin: "*", 
}));
app.use(express.json());

/* routes */
app.use("/api/screens", screenRoutes);

/* database */
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

/* server */
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`API running on port ${PORT}`)
);
