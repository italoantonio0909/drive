import axios from "axios";

export const getDirectories = () => {
  return axios
    .get("http://localhost:8000/api/drive/directory")
    .then((response) => response.data);
};

export const createDirectory = (data) => {
  return axios
    .post("http://localhost:8000/api/drive/directory-create", data)
    .then((response) => response.data);
};
export const deleteDirectory = (data) => {
  return axios
    .post("http://localhost:8000/api/drive/directory-delete", data)
    .then((response) => response.data);
};

export const getFiles = (directory) => {
  return axios
    .get(`http://localhost:8000/api/drive/files/${directory}`)
    .then((response) => response.data);
};

const options = {
  headers: {
    "content-type": "multipart/form-data",
  },
};
export const uploadFile = (data) => {
  return axios
    .post(`http://localhost:8000/api/drive/files-upload`, data, options)
    .then((response) => response.data);
};
