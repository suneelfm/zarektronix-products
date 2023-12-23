// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { IProduct, IProducts } from "../../../types/types";
import { products } from "../../data";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IProduct>
) {
  switch (req.method?.toLowerCase()) {
    case "get": {
      res.status(200).json(products[req.query.id as string]);
      break;
    }

    default:
      break;
  }
}
