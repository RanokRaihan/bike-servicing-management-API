"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bike_controller_1 = require("./bike.controller");
const bikeRouter = (0, express_1.Router)();
bikeRouter.post("/", bike_controller_1.addBikeController);
bikeRouter.get("/", bike_controller_1.getAllBikesController);
bikeRouter.get("/:bikeId", bike_controller_1.getBikeByIdController);
exports.default = bikeRouter;
