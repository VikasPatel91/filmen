import express from "express";
import multer from "multer";
import { login, logout, register } from "../Controller/auth.controller.js";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "upload/");
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname); 
  },
});
const upload = multer({ storage: storage });

const router = express.Router();

router.post("/register", upload.single("avatar"), register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
