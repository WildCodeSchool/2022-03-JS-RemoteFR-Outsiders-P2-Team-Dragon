const express = require("express");

const { ItemController, TokenController } = require("./controllers");

const router = express.Router();

router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);

router.get("/api/token", TokenController.getToken);
router.get("/api/offers", TokenController.findAllOffers);
router.get("/api/offers/:id", TokenController.findOne);

module.exports = router;
