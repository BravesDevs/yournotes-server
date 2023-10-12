import { Router } from "express";
import {
  userLoginController,
  userRegistrationController,
} from "../controllers";

const router = Router();

router.post("/users", userRegistrationController);
router.post("/users/login", userLoginController);

export default router;
