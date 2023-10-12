import { Router } from "express";
import { userRegistrationController } from "../controllers";

const router = Router();

router.post("/users", userRegistrationController);

export default router;
