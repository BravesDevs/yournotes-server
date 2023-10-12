import { userRegistrationService } from "../services";

export const userRegistrationController = async (req, res, next) => {
  const { email, firstName, lastName, password, programId, departmentId } =
    req.body;

  try {
    const user = await userRegistrationService({
      email,
      firstName,
      lastName,
      password,
      programId,
      departmentId,
    });

    res.status(201).json({
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
