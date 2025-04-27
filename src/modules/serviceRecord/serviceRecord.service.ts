import prisma from "../../config/prisma.config";
import {
  IServiceRecord,
  IUpdateServiceRecord,
} from "./serviceRecord.interface";

export const createServiceRecordService = async (
  serviceData: IServiceRecord
) => {
  try {
    const serviceRecord = prisma.serviceRecord.create({
      data: serviceData,
    });
    return serviceRecord;
  } catch (error) {
    throw error;
  }
};

// get all service records
export const getAllServiceRecordsService = async () => {
  try {
    const serviceRecords = await prisma.serviceRecord.findMany();
    return serviceRecords;
  } catch (error) {
    throw error;
  }
};
// get service record by id
export const getServiceRecordByIdService = async (serviceId: string) => {
  try {
    const serviceRecord = await prisma.serviceRecord.findUnique({
      where: { serviceId },
    });
    return serviceRecord;
  } catch (error) {
    throw error;
  }
};

// make a service as completed
export const completeServiceRecordService = async ({
  serviceId,
  completionDate,
}: IUpdateServiceRecord) => {
  try {
    const updateData: { status: "done"; completionDate?: Date } = {
      status: "done",
      completionDate: new Date(),
    };
    if (completionDate) {
      updateData.completionDate = completionDate;
    }
    console.log({
      updateData,
    });
    const serviceRecord = await prisma.serviceRecord.update({
      where: { serviceId },
      data: updateData,
    });
    return serviceRecord;
  } catch (error) {
    throw error;
  }
};
