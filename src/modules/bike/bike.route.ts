import { Router } from "express";
import {
  addBikeController,
  getAllBikesController,
  getBikeByIdController,
} from "./bike.controller";

const bikeRouter = Router();

bikeRouter.post("/", addBikeController);
bikeRouter.get("/", getAllBikesController);
bikeRouter.get("/:bikeId", getBikeByIdController);

export default bikeRouter;
