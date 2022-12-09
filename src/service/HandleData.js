import Api from "./Axios";

export const getData = async (path) => {
  const response = await Api.get(path);
  return response.data;
};

export const pushData = async (path, data) => {
  const response = await Api.post(path, data);
};
