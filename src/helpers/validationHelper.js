const Joi = require("joi");

const validateRequest = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body, { abortEarly: false }); // abortEarly: false untuk mengembalikan semua error
    if (error) {
      const errors = error.details.map((detail) => detail.message); // Ambil pesan error
      return res.status(400).json({ errors }); // Kembalikan semua error
    }
    next(); // Lanjut ke middleware/controller berikutnya jika validasi berhasil
  };
};

module.exports = { validateRequest };
