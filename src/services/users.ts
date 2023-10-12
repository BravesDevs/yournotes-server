import { PrismaClient } from "@prisma/client";
import { createUserDTO } from "../common/dtoSchema";

const prisma = new PrismaClient();

export const userRegistrationService = async (data: createUserDTO) => {
  const { email, firstName, lastName, password, programId, departmentId } =
    data;

  // Check if user exists
  try {
    const isExistingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    // If user exists, throw error
    if (isExistingUser) {
      throw new Error("User already exists");
    }

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password,
        program: {
          connect: {
            id: programId,
          },
        },
        department: {
          connect: {
            id: departmentId,
          },
        },
      },
    });
  } catch (error) {
    throw new Error(error.message);
  }
};
