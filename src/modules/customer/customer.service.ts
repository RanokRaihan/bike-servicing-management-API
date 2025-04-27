import { PrismaClient } from "@prisma/client";
import ApiError from "../../errors/ApiError";

const prisma = new PrismaClient();

export const createCustomerService = async (customerData: any) => {
  try {
    const newCustomer = prisma.customer.create({
      data: customerData,
    });
    return newCustomer;
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to create customer";
    throw new ApiError(500, errorMessage);
  }
};

export const getAllCustomersService = async () => {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to fetch customers";
    throw new ApiError(500, errorMessage);
  }
};
export const getCustomerByIdService = async (customerId: string) => {
  try {
    const customer = await prisma.customer.findUnique({
      where: { customerId: customerId },
    });
    if (!customer) {
      throw new ApiError(404, "Customer not found");
    }
    return customer;
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to fetch customer";
    throw new ApiError(500, errorMessage);
  }
};
export const updateCustomerService = async (
  customerId: string,
  customerData: any
) => {
  try {
    const updatedCustomer = await prisma.customer.update({
      where: { customerId: customerId },
      data: customerData,
    });
    return updatedCustomer;
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to update customer";
    throw new ApiError(500, errorMessage);
  }
};
export const deleteCustomerService = async (customerId: string) => {
  try {
    const deletedCustomer = await prisma.customer.delete({
      where: { customerId: customerId },
    });
    return deletedCustomer;
  } catch (err: unknown) {
    const errorMessage =
      err instanceof Error ? err.message : "Failed to delete customer";
    throw new ApiError(500, errorMessage);
  }
};
