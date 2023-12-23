import axios from "axios";
import { IProduct, IProducts } from "../types/types";

export const getAllProducts = async (
  page: number
): Promise<{ data?: IProducts; error?: any }> => {
  return await axios
    .get(`/api/products?page=${page}`)
    .then((resp) => ({ data: resp.data }))
    .catch((error) => ({ error }));
};

export const getProduct = async (
  productId: string
): Promise<{ data?: IProduct; error?: any }> => {
  return await axios
    .get(`/api/products/${productId}`)
    .then((resp) => ({ data: resp.data }))
    .catch((error) => ({ error }));
};
