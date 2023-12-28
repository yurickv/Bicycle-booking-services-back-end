const { Schema, model } = require("mongoose");
const { mongooseError } = require("../helpers");
const Joi = require("joi");

const bikeSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for bike"],
    },
    type: {
      type: String,
      required: [true, "Set type for bike"],
    },
    color: {
      type: String,
      required: [true, "Set color for bike"],
    },
    wheel: {
      type: String,
      required: [true, "Set wheel size for bike"],
    },
    price: {
      type: String,
      required: [true, "Set price for bike"],
    },
    number: {
      type: String,
      required: [true, "Set number for bike"],
    },
    description: {
      type: String,
    },
    status: {
      type: String,
      default: "Available",
    },
  },
  { versionKey: false, timestamps: true }
);

bikeSchema.post("save", mongooseError);

const Bike = model("bike", bikeSchema);
module.exports = Bike;
