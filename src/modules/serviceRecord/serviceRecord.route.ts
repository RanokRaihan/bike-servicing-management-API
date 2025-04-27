import { Router } from "express";
import {
  completeServiceRecordController,
  createServiceRecordController,
  getAllServiceRecordsController,
  getServiceRecordByIdController,
} from "./serviceRecord.controller";

const serviceRecordRouter = Router();
serviceRecordRouter.post("/", createServiceRecordController);
serviceRecordRouter.get("/", getAllServiceRecordsController);
serviceRecordRouter.get("/:serviceId", getServiceRecordByIdController);
serviceRecordRouter.put(
  "/:serviceId/complete",
  completeServiceRecordController
);

export default serviceRecordRouter;
