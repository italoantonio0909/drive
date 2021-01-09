import { CREATE_DIRECTORY } from "../constants/index";

export const createDirectory = (directory) => ({
  type: CREATE_DIRECTORY,
  directory: directory,
});
