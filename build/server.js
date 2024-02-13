"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = __importDefault(require("./config/db"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const imageRoutes_1 = __importDefault(require("./routes/imageRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const errorMiddleware_1 = require("./middlewares/errorMiddleware");
(0, db_1.default)();
const app = (0, express_1.default)();
const PORT = 8800;
app.use((0, cors_1.default)({
    origin: "http://localhost:3000",
    credentials: true,
}));
app.use(body_parser_1.default.json());
app.use(body_parser_1.default.urlencoded());
app.use("/api", userRoutes_1.default);
app.use("/api/images", imageRoutes_1.default);
app.use(errorMiddleware_1.errorHandler);
app.use(errorMiddleware_1.notFound);
app.listen(PORT, () => {
    console.log(`Server started at PORT ${PORT}`);
});
