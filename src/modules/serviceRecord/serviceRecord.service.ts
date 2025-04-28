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

    const serviceRecord = await prisma.serviceRecord.update({
      where: { serviceId },
      data: updateData,
    });
    return serviceRecord;
  } catch (error) {
    throw error;
  }
};

// get pending or overdue services (older than 7 days)
export const getPendingServicesService = async () => {
  try {
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

    const pendingOrOverdueServices = await prisma.serviceRecord.findMany({
      where: {
        AND: [
          {
            status: {
              in: ["pending", "in_progress"],
            },
          },
          {
            serviceDate: {
              lt: sevenDaysAgo,
            },
          },
        ],
      },
    });

    return pendingOrOverdueServices;
  } catch (error) {
    throw error;
  }
};
