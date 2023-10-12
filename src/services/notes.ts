import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const notesListService = async () => {
  return await prisma.note.findMany({
    select: {
      id: true,
      title: true,
      content: true,
    },
  });
};

export const notesCreateService = async (data) => {
  // const { title, content } = data;
  // return await prisma.note.create({
  //   data: {
  //     title,
  //     content,
  //   },
  // });
};

export const notesUpdateService = async (id: number, data) => {
  const { title, content } = data;

  return await prisma.note.update({
    where: {
      id,
    },
    data: {
      title,
      content,
    },
  });
};

export const notesDeleteService = async (id: number) => {
  return await prisma.note.delete({
    where: {
      id: id,
    },
  });
};
