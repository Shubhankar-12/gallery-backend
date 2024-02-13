import express, { Router } from "express";
import {
  authUser,
  logoutUser,
  registerUser,
} from "../controllers/userController";

const router: Router = express.Router();

router.post("/", registerUser);
router.post("/auth", authUser);
router.post("/logout", logoutUser);

export default router;
