const multer = require("multer");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs"); // Import modul fs
const path = require("path"); // Import modul path untuk manipulasi path direktori

exports.storageMulter = (destination) =>
  multer.diskStorage({
    destination: function (req, file, cb) {
      // Path lengkap ke direktori tujuan
      const dir = `images/${destination}`;

      // Buat direktori jika belum ada
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true }); // `recursive: true` untuk membuat parent directory jika belum ada
      }

      cb(null, dir);
    },
    filename: function (req, file, cb) {
      const ext = file.originalname.split(".").pop();
      const newFilename = `${uuidv4()}.${ext}`;
      cb(null, newFilename);

      // Simpan nama file ke req.body.imgUrl
      req.body.imgUrl = newFilename;
    },
  });
