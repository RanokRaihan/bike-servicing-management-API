import prisma from "../../config/prisma.config";
import ApiError from "../../errors/ApiError";
import { IBike } from "./bike.interface";

export const addBikeService = async (bikeData: IBike) => {
  try {
    const bike = await prisma.bike.create({
      data: bikeData,
    });
    return bike;
  } catch (error) {
    throw new ApiError(500, "Error adding bike: " + (error as Error).message);
  }
};

export const getAllBikesService = async () => {
  try {
    const bikes = await prisma.bike.findMany();
    return bikes;
  } catch (error) {
    throw error;
  }
};
export const getBikeByIdService = async (bikeId: string) => {
  try {
    const bike = await prisma.bike.findUnique({
      where: { bikeId },
    });
    if (!bike) {
      throw new ApiError(404, "Bike not found");
    }
    return bike;
  } catch (error) {
    throw error;
  }
};
