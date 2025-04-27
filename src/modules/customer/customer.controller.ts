import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import {
  createCustomerService,
  deleteCustomerService,
  getAllCustomersService,
  getCustomerByIdService,
  updateCustomerService,
} from "./customer.service";

export const createCustomerController = asyncHandler(
  async (req: Request, res: Response) => {
    const customerData = req.body;
    const result = await createCustomerService(customerData);
    sendResponse(res, 201, "Customer created successfully", result);
  }
);

export const getAllCustomersController = asyncHandler(
  async (req: Request, res: Response) => {
    const customers = await getAllCustomersService();
    sendResponse(res, 200, "Customers fetched successfully", customers);
  }
);
export const getCustomerByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const customerId = req.params.customerId;
    const customer = await getCustomerByIdService(customerId);
    sendResponse(res, 200, "Customer fetched successfully", customer);
  }
);
export const updateCustomerController = asyncHandler(
  async (req: Request, res: Response) => {
    const customerId = req.params.customerId;
    const customerData = req.body;
    const updatedCustomer = await updateCustomerService(
      customerId,
      customerData
    );
    sendResponse(res, 200, "Customer updated successfully", updatedCustomer);
  }
);
export const deleteCustomerController = asyncHandler(
  async (req: Request, res: Response) => {
    const customerId = req.params.customerId;
    await deleteCustomerService(customerId);
    sendResponse(res, 200, "Customer deleted successfully", null);
  }
);
