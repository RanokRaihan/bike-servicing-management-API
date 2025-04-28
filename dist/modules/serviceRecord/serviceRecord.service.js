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
exports.getPendingServicesService = exports.completeServiceRecordService = exports.getServiceRecordByIdService = exports.getAllServiceRecordsService = exports.createServiceRecordService = void 0;
const prisma_config_1 = __importDefault(require("../../config/prisma.config"));
const createServiceRecordService = (serviceData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceRecord = prisma_config_1.default.serviceRecord.create({
            data: serviceData,
        });
        return serviceRecord;
    }
    catch (error) {
        throw error;
    }
});
exports.createServiceRecordService = createServiceRecordService;
// get all service records
const getAllServiceRecordsService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceRecords = yield prisma_config_1.default.serviceRecord.findMany();
        return serviceRecords;
    }
    catch (error) {
        throw error;
    }
});
exports.getAllServiceRecordsService = getAllServiceRecordsService;
// get service record by id
const getServiceRecordByIdService = (serviceId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const serviceRecord = yield prisma_config_1.default.serviceRecord.findUnique({
            where: { serviceId },
        });
        return serviceRecord;
    }
    catch (error) {
        throw error;
    }
});
exports.getServiceRecordByIdService = getServiceRecordByIdService;
// make a service as completed
const completeServiceRecordService = (_a) => __awaiter(void 0, [_a], void 0, function* ({ serviceId, completionDate, }) {
    try {
        const updateData = {
            status: "done",
            completionDate: new Date(),
        };
        if (completionDate) {
            updateData.completionDate = completionDate;
        }
        const serviceRecord = yield prisma_config_1.default.serviceRecord.update({
            where: { serviceId },
            data: updateData,
        });
        return serviceRecord;
    }
    catch (error) {
        throw error;
    }
});
exports.completeServiceRecordService = completeServiceRecordService;
// get pending or overdue services (older than 7 days)
const getPendingServicesService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
        const pendingOrOverdueServices = yield prisma_config_1.default.serviceRecord.findMany({
            where: {
                AND: [
                    {
                        status: {
                            in: ["pending", "in_progress"],
                        },
                    },
                    {
                        serviceDate: {
                            lt: sevenDaysAgo,
                        },
                    },
                ],
            },
        });
        return pendingOrOverdueServices;
    }
    catch (error) {
        throw error;
    }
});
exports.getPendingServicesService = getPendingServicesService;
