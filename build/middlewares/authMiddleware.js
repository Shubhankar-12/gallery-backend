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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.protect = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const protect = (0, express_async_handler_1.default)((req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    let token;
    // token = req.cookies.jwt;
    console.log(req);
    // if (token) {
    //   const sessionSecret: Secret | undefined = process.env.SESSION_SECRET;
    //   if (sessionSecret) {
    //     try {
    //       const decoded = jwt.verify(token, sessionSecret) as JwtPayload;
    //       req.user = await User.findById(decoded.userId).select("-password");
    //       next();
    //     } catch (error) {
    //       console.error(error);
    //       res.status(401);
    //       throw new Error("Not authorized, token failed");
    //     }
    //   }
    // } else {
    //   res.status(401);
    //   throw new Error("Not authorized, no token");
    // }
}));
exports.protect = protect;
