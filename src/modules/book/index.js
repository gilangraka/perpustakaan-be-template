const express = require("express");
const router = express.Router();
const controller = require("./controller");
const { validateRequest } = require("../../helpers/validationHelper");
const { storeSchema, updateSchema, updateImgSchema } = require("./schema");

// Endpoint Untuk Menambahkan Data Buku
router.post("/", validateRequest(storeSchema), controller.store);

// Endpoint Untuk Get Semua Buku
router.get("/", controller.index);

// Endpoint Untuk Get Buku By ID
router.get("/:id", controller.show);

// Endpoint Untuk Mengupdate Data Buku
router.put("/:id", validateRequest(updateSchema), controller.update);

// Endpoint Untuk Menghapus Data Buku
router.delete("/:id", controller.destroy);

// Endpoint Untuk Mengubah Gambar Pada Buku
router.post(
  "/:id/change-image",
  validateRequest(updateImgSchema),
  controller.updateImage
);

module.exports = router;
