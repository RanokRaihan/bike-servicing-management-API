"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const globalErrorHandler_1 = require("./errors/globalErrorHandler");
const notFound_middleware_1 = __importDefault(require("./middlewares/notFound.middleware"));
const routes_1 = __importDefault(require("./routes"));
//create the express app
const app = (0, express_1.default)();
dotenv_1.default.config();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true, limit: "16kb" }));
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.send({ message: "server is running 🚀! Welcome to the API " });
});
app.use("/api/", routes_1.default);
// global error handler
app.use(globalErrorHandler_1.globalErrorHandler);
//not found route error handler
app.use(notFound_middleware_1.default);
exports.default = app;
