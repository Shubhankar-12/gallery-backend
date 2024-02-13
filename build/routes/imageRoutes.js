"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const imageController_1 = require("../controllers/imageController");
const router = express_1.default.Router();
router.post("/folders", imageController_1.createFolder);
router.get("/folders/user/:userId", imageController_1.getAllFoldersForUser);
router.put("/folders/add-images/:folderId", imageController_1.addImagesToFolder);
router.put("/folders/delete-images/:folderId", imageController_1.deleteImagesFromFolder);
router.get("/folders/:folderId", imageController_1.getAllImagesInFolder);
exports.default = router;
