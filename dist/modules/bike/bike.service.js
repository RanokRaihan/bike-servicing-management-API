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
exports.getBikeByIdService = exports.getAllBikesService = exports.addBikeService = void 0;
const prisma_config_1 = __importDefault(require("../../config/prisma.config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const addBikeService = (bikeData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield prisma_config_1.default.bike.create({
            data: bikeData,
        });
        return bike;
    }
    catch (error) {
        throw new ApiError_1.default(500, "Error adding bike: " + error.message);
    }
});
exports.addBikeService = addBikeService;
const getAllBikesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bikes = yield prisma_config_1.default.bike.findMany();
        return bikes;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllBikesService = getAllBikesService;
const getBikeByIdService = (bikeId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const bike = yield prisma_config_1.default.bike.findUnique({
            where: { bikeId },
        });
        if (!bike) {
            throw new ApiError_1.default(404, "Bike not found");
        }
        return bike;
    }
    catch (error) {
        throw error;
    }
});
exports.getBikeByIdService = getBikeByIdService;
