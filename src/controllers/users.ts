import { userLoginService, userRegistrationService } from "../services";

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

export const userLoginController = async (req, res, next) => {
  const { email, password } = req.body;

  try {
    const user = await userLoginService({
      email,
      password,
    });

    res.status(200).json({
      message: "User logged in successfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};
