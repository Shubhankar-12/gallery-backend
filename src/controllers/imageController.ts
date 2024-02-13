import { Request, Response } from "express";
import {
  ImageFolderModel,
  ImageFolder,
  ImageFolderDocument,
} from "../models/image";

export const getAllFoldersForUser = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId } = req.params;

    const folders: ImageFolderDocument[] = await ImageFolderModel.find({
      userId,
    });

    res.status(200).json(folders);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const createFolder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { userId, folderName } = req.body;
    const newFolder: ImageFolder = { userId, folderName, images: [] };

    const createdFolder: ImageFolderDocument = await ImageFolderModel.create(
      newFolder
    );
    res.status(201).json(createdFolder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const addImagesToFolder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { folderId } = req.params;
    const { image } = req.body;

    const imageObject = {
      fileName: "temp.jpg",
      imageUrl: image,
    };

    const updatedFolder: ImageFolderDocument | null =
      await ImageFolderModel.findByIdAndUpdate(
        folderId,
        { $push: { images: imageObject } },
        { new: true }
      );

    if (!updatedFolder) {
      res.status(404).json({ error: "Folder not found" });
      return;
    }

    res.status(200).json(updatedFolder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const deleteImagesFromFolder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { folderId } = req.params;
    const { imageId } = req.body;

    const updatedFolder: ImageFolderDocument | null =
      await ImageFolderModel.findByIdAndUpdate(
        folderId,
        { $pull: { images: { _id: imageId } } },
        { new: true }
      );

    if (!updatedFolder) {
      res.status(404).json({ error: "Folder not found" });
      return;
    }

    res.status(200).json(updatedFolder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllImagesInFolder = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { folderId } = req.params;

    const folder: ImageFolderDocument | null = await ImageFolderModel.findById(
      folderId
    );

    if (!folder) {
      res.status(404).json({ error: "Folder not found" });
      return;
    }

    res.status(200).json(folder.images);
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
