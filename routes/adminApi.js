const express = require("express");
const router = express.Router();
const ctrl = require("../controllers/controllers");

const { validateBody, isValidId } = require("../middlewares");
const { validSchema } = require("../helpers");

router.get("/", ctrl.getAll);

router.get("/:id", isValidId, ctrl.getById);

router.post("/", validateBody(validSchema), ctrl.add);

router.put("/:id", isValidId, validateBody(validSchema), ctrl.change);

router.delete("/:id", isValidId, ctrl.del);

module.exports = router;
