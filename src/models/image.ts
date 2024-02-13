import mongoose, { Schema, Document, ObjectId } from "mongoose";

interface Image {
  _id: ObjectId;
  fileName: string;
  imageUrl: string;
}

interface ImageFolder {
  userId: ObjectId;
  folderName: string;
  images: Image[];
}

interface ImageFolderDocument extends ImageFolder, Document {}

const imageFolderSchema = new Schema<ImageFolderDocument>({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  folderName: {
    type: String,
    required: true,
  },
  images: [
    {
      fileName: String,
      imageUrl: String,
    },
  ],
});

const ImageFolderModel = mongoose.model<ImageFolderDocument>(
  "ImageFolder",
  imageFolderSchema
);

export { ImageFolderModel, ImageFolder, ImageFolderDocument };
