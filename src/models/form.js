const { Schema, model } = require("mongoose");

const formSchema = new Schema(
  {
    author: String,
    description: {
      required: true,
      type: String,
    },
    empresa:String,
    date: {
      type: Date,
      default: Date.now,
    },
    correo:String
  },
  {
    timestamps: true,
  }
);

module.exports = model("form", formSchema);
