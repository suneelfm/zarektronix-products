// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IProducts } from "../../../types/types";
import { products } from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProducts>
) {
  switch (req.method?.toLowerCase()) {
    case "get": {
      const start = (parseInt((req.query.page || "0") as string) - 1) * 10;
      const end = start + 10;
      const productsList = Object.values(products);
      res.status(200).json({
        data: [...productsList.slice(start, end)],
        totalProducts: productsList.length,
      });
      break;
    }
    default:
      break;
  }
}
