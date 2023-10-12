import {
  notesListService,
  notesCreateService,
  notesUpdateService,
  notesDeleteService,
} from "../services";

export const notesListController = async (req, res, next) => {
  try {
    const notes = await notesListService();
    return res.status(200).json({ message: "ok", data: notes });
  } catch (error) {
    next(error);
  }
};

export const notesCreateController = async (req, res, next) => {
  try {
    const { title, content } = req.body;
    const note = await notesCreateService({ title, content });
    return res.status(200).json({ message: "ok", data: note });
  } catch (error) {
    next(error);
  }
};

export const notesUpdateController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const note = await notesUpdateService(parseInt(id), { title, content });
    return res.status(200).json({ message: "ok", data: note });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const notesDeleteController = async (req, res, next) => {
  try {
    const { id } = req.params;
    const note = await notesDeleteService(parseInt(id));
    return res.status(200).json({ message: "ok", data: note });
  } catch (error) {
    next(error);
  }
};
