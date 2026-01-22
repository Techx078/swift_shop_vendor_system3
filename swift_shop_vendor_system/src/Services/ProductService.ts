import apiClient from "./ApiClient.ts";

export const getAllProduct =() => {
  return apiClient.get(`/`)
};

export const getProductWithId = (productId) => {
  return apiClient.get(`${productId}`)
}