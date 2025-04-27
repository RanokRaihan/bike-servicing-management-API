import prisma from "../../config/prisma.config";
import ApiError from "../../errors/ApiError";

export const createCustomerService = async (customerData: any) => {
  try {
    const newCustomer = prisma.customer.create({
      data: customerData,
    });
    return newCustomer;
  } catch (err) {
    throw err;
  }
};

export const getAllCustomersService = async () => {
  try {
    const customers = await prisma.customer.findMany();
    return customers;
  } catch (err) {
    throw err;
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
  } catch (err) {
    throw err;
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
  } catch (err) {
    throw err;
  }
};
export const deleteCustomerService = async (customerId: string) => {
  try {
    const deletedCustomer = await prisma.customer.delete({
      where: { customerId: customerId },
    });
    return deletedCustomer;
  } catch (err) {
    throw err;
  }
};
