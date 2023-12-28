const Bike = require("../models/bikeModel");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Bike.find();
  res.status(200).json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  // const result = await Contact.findOne({ _id: id });
  const result = await Bike.findById(id);
  if (!result) {
    throw HttpError(404, "Not Found");
  }

  res.status(200).json(result);
};

const add = async (req, res) => {
  const result = await Bike.find();
  const { number } = req.body;

  let double = false;
  for (const item of result) {
    if (item.number === number) {
      double = true;
      throw HttpError(404, `bike with number ${number} Allready in DB`);
    }
  }
  if (!double) {
    const response = await Bike.create(req.body);
    return res.status(201).json(response);
  }
};

const del = async (req, res) => {
  const { id } = req.params;
  const result = await Bike.findByIdAndDelete(id);
  if (!result) throw HttpError(404, "Not Found");

  res.status(200).json({ message: "contact deleted" });
};

const change = async (req, res) => {
  const { id } = req.params;
  const result = await Bike.findByIdAndUpdate(id, req.body, { new: true });

  if (!result) throw HttpError(404, "Not Found");

  res.status(200).json(result);
};

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  del: ctrlWrapper(del),
  change: ctrlWrapper(change),
};
