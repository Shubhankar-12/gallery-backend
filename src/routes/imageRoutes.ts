import express from "express";
import {
  createFolder,
  addImagesToFolder,
  deleteImagesFromFolder,
  getAllFoldersForUser,
  getAllImagesInFolder,
} from "../controllers/imageController";

const router = express.Router();

router.post("/folders", createFolder);
router.get("/folders/user/:userId", getAllFoldersForUser);
router.put("/folders/add-images/:folderId", addImagesToFolder);
router.put("/folders/delete-images/:folderId", deleteImagesFromFolder);
router.get("/folders/:folderId", getAllImagesInFolder);

export default router;
