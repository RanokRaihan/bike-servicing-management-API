"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalErrorHandler = void 0;
const client_1 = require("@prisma/client");
const ApiError_1 = __importDefault(require("./ApiError"));
const globalErrorHandler = (err, req, res, next) => {
    // define default values
    let statusCode = 500;
    let message = err.message || "something went wrong!";
    const node_env = process.env.NODE_ENV;
    //apiError handler
    if (err instanceof ApiError_1.default) {
        statusCode = err.statusCode;
        message = err.message;
    }
    if (err instanceof Error) {
        message = err.message;
    }
    if (err instanceof client_1.Prisma.PrismaClientValidationError) {
        message = "Validation Error! Please check your input.";
        statusCode = 400;
    }
    else if (err instanceof client_1.Prisma.PrismaClientKnownRequestError) {
        if (err.code === "P2002") {
            message = "Duplicate Key error! Please check your input.";
            statusCode = 400;
        }
    }
    //   return response
    res.status(statusCode).json({
        success: false,
        message,
        statusCode,
        stack: node_env === "development" ? err === null || err === void 0 ? void 0 : err.stack : null,
    });
};
exports.globalErrorHandler = globalErrorHandler;
