import apiClient from "./ApiClient.ts";

export const getAllProduct =() => {
  return apiClient.get(`/`)
};