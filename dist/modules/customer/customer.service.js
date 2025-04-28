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
exports.deleteCustomerService = exports.updateCustomerService = exports.getCustomerByIdService = exports.getAllCustomersService = exports.createCustomerService = void 0;
const prisma_config_1 = __importDefault(require("../../config/prisma.config"));
const ApiError_1 = __importDefault(require("../../errors/ApiError"));
const createCustomerService = (customerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newCustomer = prisma_config_1.default.customer.create({
            data: customerData,
        });
        return newCustomer;
    }
    catch (err) {
        throw err;
    }
});
exports.createCustomerService = createCustomerService;
const getAllCustomersService = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customers = yield prisma_config_1.default.customer.findMany();
        return customers;
    }
    catch (err) {
        throw err;
    }
});
exports.getAllCustomersService = getAllCustomersService;
const getCustomerByIdService = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const customer = yield prisma_config_1.default.customer.findUnique({
            where: { customerId: customerId },
        });
        if (!customer) {
            throw new ApiError_1.default(404, "Customer not found");
        }
        return customer;
    }
    catch (err) {
        throw err;
    }
});
exports.getCustomerByIdService = getCustomerByIdService;
const updateCustomerService = (customerId, customerData) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const existingCustomer = yield prisma_config_1.default.customer.findUnique({
            where: { customerId: customerId },
        });
        if (!existingCustomer) {
            throw new ApiError_1.default(404, "Customer not found!");
        }
        const updatedCustomer = yield prisma_config_1.default.customer.update({
            where: { customerId: customerId },
            data: customerData,
        });
        return updatedCustomer;
    }
    catch (err) {
        throw err;
    }
});
exports.updateCustomerService = updateCustomerService;
const deleteCustomerService = (customerId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedCustomer = yield prisma_config_1.default.customer.delete({
            where: { customerId: customerId },
        });
        return deletedCustomer;
    }
    catch (err) {
        throw err;
    }
});
exports.deleteCustomerService = deleteCustomerService;
