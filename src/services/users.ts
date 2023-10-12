import { PrismaClient } from "@prisma/client";
import { userLoginDTO, userRegistrationDTO } from "../common/dtoSchema";
import { generateHash, compareHash } from "../utils";

const prisma = new PrismaClient();

export const userRegistrationService = async (data: userRegistrationDTO) => {
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

    // Hash password

    const hashedPassword = await generateHash(password);

    const user = await prisma.user.create({
      data: {
        email,
        firstName,
        lastName,
        password: hashedPassword,
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

export const userLoginService = async (data: userLoginDTO) => {
  const { email, password } = data;

  try {
    const isUserExists = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!isUserExists) {
      throw new Error("User does not exist");
    }

    if (!(await compareHash(password, isUserExists.password))) {
      throw new Error("Invalid password");
    }

    return isUserExists;
  } catch (error) {
    throw new Error(error.message);
  }
};
