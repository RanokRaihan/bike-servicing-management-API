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
exports.getPendingServiceRecordsController = exports.completeServiceRecordController = exports.getServiceRecordByIdController = exports.getAllServiceRecordsController = exports.createServiceRecordController = void 0;
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = require("../../utils/sendResponse");
const serviceRecord_service_1 = require("./serviceRecord.service");
exports.createServiceRecordController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecordData = req.body;
    const serviceRecord = yield (0, serviceRecord_service_1.createServiceRecordService)(serviceRecordData);
    (0, sendResponse_1.sendResponse)(res, 201, "Service record created successfully", serviceRecord);
}));
exports.getAllServiceRecordsController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const serviceRecords = yield (0, serviceRecord_service_1.getAllServiceRecordsService)();
    (0, sendResponse_1.sendResponse)(res, 200, "Service records fetched successfully", serviceRecords);
}));
exports.getServiceRecordByIdController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { serviceId } = req.params;
    const serviceRecord = yield (0, serviceRecord_service_1.getServiceRecordByIdService)(serviceId);
    if (!serviceRecord) {
        throw new ApiError_1.default(404, "Service record not found");
    }
    (0, sendResponse_1.sendResponse)(res, 200, "Service record fetched successfully", serviceRecord);
}));
exports.completeServiceRecordController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { serviceId } = req.params;
    const completionDate = (_a = req.body) === null || _a === void 0 ? void 0 : _a.completionDate;
    const serviceRecord = yield (0, serviceRecord_service_1.completeServiceRecordService)({
        serviceId,
        completionDate,
    });
    (0, sendResponse_1.sendResponse)(res, 200, "Service marked as completed", serviceRecord);
}));
// get overdue service records
exports.getPendingServiceRecordsController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const penndingServiceRecord = yield (0, serviceRecord_service_1.getPendingServicesService)();
    (0, sendResponse_1.sendResponse)(res, 200, "Overdue or pending services fetched successfully", penndingServiceRecord);
}));
