import { Router } from "express";
import {
  createCustomerController,
  deleteCustomerController,
  getAllCustomersController,
  getCustomerByIdController,
  updateCustomerController,
} from "./customer.controller";

const customerRouter = Router();

customerRouter.post("/", createCustomerController);
customerRouter.get("/", getAllCustomersController);
customerRouter.get("/:customerId", getCustomerByIdController);
customerRouter.put("/:customerId", updateCustomerController);
customerRouter.delete("/:customerId", deleteCustomerController);

export default customerRouter;
