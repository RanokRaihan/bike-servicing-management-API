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
exports.deleteCustomerController = exports.updateCustomerController = exports.getCustomerByIdController = exports.getAllCustomersController = exports.createCustomerController = void 0;
const asyncHandler_1 = __importDefault(require("../../utils/asyncHandler"));
const sendResponse_1 = require("../../utils/sendResponse");
const customer_service_1 = require("./customer.service");
exports.createCustomerController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerData = req.body;
    const result = yield (0, customer_service_1.createCustomerService)(customerData);
    (0, sendResponse_1.sendResponse)(res, 201, "Customer created successfully", result);
}));
exports.getAllCustomersController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customers = yield (0, customer_service_1.getAllCustomersService)();
    (0, sendResponse_1.sendResponse)(res, 200, "Customers fetched successfully", customers);
}));
exports.getCustomerByIdController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.customerId;
    const customer = yield (0, customer_service_1.getCustomerByIdService)(customerId);
    (0, sendResponse_1.sendResponse)(res, 200, "Customer fetched successfully", customer);
}));
exports.updateCustomerController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.customerId;
    const customerData = req.body;
    const updatedCustomer = yield (0, customer_service_1.updateCustomerService)(customerId, customerData);
    (0, sendResponse_1.sendResponse)(res, 200, "Customer updated successfully", updatedCustomer);
}));
exports.deleteCustomerController = (0, asyncHandler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const customerId = req.params.customerId;
    yield (0, customer_service_1.deleteCustomerService)(customerId);
    (0, sendResponse_1.sendResponse)(res, 200, "Customer deleted successfully", null);
}));
