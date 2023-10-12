import { Router } from "express";
import {
  notesCreateController,
  notesDeleteController,
  notesListController,
  notesUpdateController,
} from "../controllers";
const router = Router();

router.get("/notes", notesListController);
router.post("/notes", notesCreateController);
router.put("/note/:id", notesUpdateController);
router.delete("/note/:id", notesDeleteController);

export default router;
