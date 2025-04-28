import { Request, Response } from "express";
import ApiError from "../../errors/ApiError";
import asyncHandler from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import {
  completeServiceRecordService,
  createServiceRecordService,
  getAllServiceRecordsService,
  getPendingServicesService,
  getServiceRecordByIdService,
} from "./serviceRecord.service";

export const createServiceRecordController = asyncHandler(
  async (req: Request, res: Response) => {
    const serviceRecordData = req.body;
    const serviceRecord = await createServiceRecordService(serviceRecordData);
    sendResponse(
      res,
      201,
      "Service record created successfully",
      serviceRecord
    );
  }
);

export const getAllServiceRecordsController = asyncHandler(
  async (req: Request, res: Response) => {
    const serviceRecords = await getAllServiceRecordsService();
    sendResponse(
      res,
      200,
      "Service records fetched successfully",
      serviceRecords
    );
  }
);

export const getServiceRecordByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const serviceRecord = await getServiceRecordByIdService(serviceId);
    if (!serviceRecord) {
      throw new ApiError(404, "Service record not found");
    }
    sendResponse(
      res,
      200,
      "Service record fetched successfully",
      serviceRecord
    );
  }
);

export const completeServiceRecordController = asyncHandler(
  async (req: Request, res: Response) => {
    const { serviceId } = req.params;
    const completionDate = req.body?.completionDate;

    const serviceRecord = await completeServiceRecordService({
      serviceId,
      completionDate,
    });
    sendResponse(res, 200, "Service marked as completed", serviceRecord);
  }
);

// get overdue service records
export const getPendingServiceRecordsController = asyncHandler(
  async (req: Request, res: Response) => {
    const penndingServiceRecord = await getPendingServicesService();
    sendResponse(
      res,
      200,
      "Overdue or pending services fetched successfully",
      penndingServiceRecord
    );
  }
);
