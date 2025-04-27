import { Request, Response } from "express";
import asyncHandler from "../../utils/asyncHandler";
import { sendResponse } from "../../utils/sendResponse";
import { IBike } from "./bike.interface";
import {
  addBikeService,
  getAllBikesService,
  getBikeByIdService,
} from "./bike.service";

export const addBikeController = asyncHandler(
  async (req: Request, res: Response) => {
    const bikeData: IBike = req.body;
    const result = await addBikeService(bikeData);
    sendResponse(res, 201, "Bike added successfully", result);
  }
);

export const getAllBikesController = asyncHandler(
  async (req: Request, res: Response) => {
    const bikes = await getAllBikesService();
    sendResponse(res, 200, "Bikes fetched successfully", bikes);
  }
);
export const getBikeByIdController = asyncHandler(
  async (req: Request, res: Response) => {
    const bikeId = req.params.bikeId;
    const bike = await getBikeByIdService(bikeId);
    sendResponse(res, 200, "Bike fetched successfully", bike);
  }
);
