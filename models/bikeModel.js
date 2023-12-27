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
    id: {
      type: String,
      required: [true, "Set id for bike"],
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

const updateAvailableSchema = Joi.object({
  status: Joi.string().required(),
});
module.exports = updateAvailableSchema;

const Bike = model("contact", bikeSchema);
module.exports = Bike;
