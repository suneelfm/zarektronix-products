import axios from "axios";
import { IProducts } from "../types/types";

export const getAllProducts = async (
  page: number
): Promise<{ data?: IProducts; error?: any }> => {
  return await axios
    .get(`/api/products?page=${page}`)
    .then((resp) => ({ data: resp.data }))
    .catch((error) => ({ error }));
};
