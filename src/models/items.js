const moongose = require("mongoose");
const { Schema } = moongose;

const itemSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Item = moongose.model("Item",itemSchema);

module.exports = Item;
