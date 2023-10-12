import * as dotenv from "dotenv";

dotenv.config();

export const appConfig = {
  PORT: process.env.PORT,
  APP_NAME: process.env.APP_NAME,
  API_HOSTS: "*",
};
