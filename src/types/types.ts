import { ObjectId } from "mongoose";

interface IUser {
  _id: ObjectId;
  name: string;
  email: string;
}

interface Image {
  _id: string;
  fileName: string;
  imageUrl: string;
}

interface ImageFolder {
  _id: string;
  userId: string;
  folderName: string;
  images: Image[];
}
export { IUser, Image, ImageFolder };
