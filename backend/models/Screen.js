const mongoose = require("mongoose");

const screenSchema = new mongoose.Schema(
  {
    _id: String,
    blocks: {
      block1: String,
      block2: String,
      block3: String,
      block4: String,
      block5: String,
      block6: String
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  },
  { collection: "screens" }   
);

module.exports = mongoose.model("Screen", screenSchema);
