import { Response } from "express";
import jwt from "jsonwebtoken";

const generateToken = (res: Response, userId: string): void => {
  const token = jwt.sign({ userId }, process.env.SESSION_SECRET || "", {
    expiresIn: "2d",
  });

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 48 * 60 * 60 * 1000,
  });
};

export default generateToken;
