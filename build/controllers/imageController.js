"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllImagesInFolder = exports.deleteImagesFromFolder = exports.addImagesToFolder = exports.createFolder = exports.getAllFoldersForUser = void 0;
const image_1 = require("../models/image");
const getAllFoldersForUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        const folders = yield image_1.ImageFolderModel.find({
            userId,
        });
        res.status(200).json(folders);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllFoldersForUser = getAllFoldersForUser;
const createFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, folderName } = req.body;
        const newFolder = { userId, folderName, images: [] };
        const createdFolder = yield image_1.ImageFolderModel.create(newFolder);
        res.status(201).json(createdFolder);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.createFolder = createFolder;
const addImagesToFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { folderId } = req.params;
        const { image } = req.body;
        const imageObject = {
            fileName: "temp.jpg",
            imageUrl: image,
        };
        const updatedFolder = yield image_1.ImageFolderModel.findByIdAndUpdate(folderId, { $push: { images: imageObject } }, { new: true });
        if (!updatedFolder) {
            res.status(404).json({ error: "Folder not found" });
            return;
        }
        res.status(200).json(updatedFolder);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.addImagesToFolder = addImagesToFolder;
const deleteImagesFromFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { folderId } = req.params;
        const { imageId } = req.body;
        const updatedFolder = yield image_1.ImageFolderModel.findByIdAndUpdate(folderId, { $pull: { images: { _id: imageId } } }, { new: true });
        if (!updatedFolder) {
            res.status(404).json({ error: "Folder not found" });
            return;
        }
        res.status(200).json(updatedFolder);
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.deleteImagesFromFolder = deleteImagesFromFolder;
const getAllImagesInFolder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { folderId } = req.params;
        const folder = yield image_1.ImageFolderModel.findById(folderId);
        if (!folder) {
            res.status(404).json({ error: "Folder not found" });
            return;
        }
        res.status(200).json(folder.images);
    }
    catch (e) {
        console.error(e);
        res.status(500).json({ error: "Internal Server Error" });
    }
});
exports.getAllImagesInFolder = getAllImagesInFolder;
