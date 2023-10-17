import axios from "axios";
const { BASE_URL } = require("../constants/variable");

const ItemServiceRequest = axios.create({
  baseURL: BASE_URL,
});

export const getItem = async (limit) => {
  const res = await ItemServiceRequest.get(`/list?limit=${limit}`);
  return res.data;
};

export const getItemById = async (itemId) => {
  const res = await ItemServiceRequest.get(`/detail/${itemId}`);
  return res.data;
};
