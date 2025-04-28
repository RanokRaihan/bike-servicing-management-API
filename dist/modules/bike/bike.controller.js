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
exports.getBikeByIdController = exports.getAllBikesController = exports.addBikeController = void 0;
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = require("../../utils/sendResponse");
const bike_service_1 = require("./bike.service");
exports.addBikeController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeData = req.body;
    const result = yield (0, bike_service_1.addBikeService)(bikeData);
    (0, sendResponse_1.sendResponse)(res, 201, "Bike added successfully", result);
}));
exports.getAllBikesController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikes = yield (0, bike_service_1.getAllBikesService)();
    (0, sendResponse_1.sendResponse)(res, 200, "Bikes fetched successfully", bikes);
}));
exports.getBikeByIdController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const bikeId = req.params.bikeId;
    const bike = yield (0, bike_service_1.getBikeByIdService)(bikeId);
    (0, sendResponse_1.sendResponse)(res, 200, "Bike fetched successfully", bike);
}));
