import { Grid, Pagination } from "@mui/material";
import React, { useEffect, useState } from "react";
import { IProduct, IProducts } from "../../types/types";
import ProductCard from "../atoms/ProductCard";
import { useRouter } from "next/router";
import { getAllProducts } from "../../services/products";

export default function Products() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState<IProducts | undefined>();
  const router = useRouter();
  const getProducts = async () => {
    const { data, error } = await getAllProducts(page);
    if (data) {
      setProducts(data);
    } else if (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [page]);

  return (
    <Grid container p={2}>
      <Grid container p={1} fontSize={"30px"}>
        Our Products
      </Grid>
      {products?.data?.map((product: IProduct) => (
        <ProductCard
          key={product.id}
          details={product}
          onCardClick={(product) => router.push(`/products/${product.id}`)}
        />
      ))}
      <Grid container justifyContent={"center"} p={1}>
        <Pagination
          count={Math.ceil((products?.totalProducts || 1) / 10)}
          page={page}
          onChange={(page, value) => {
            setPage(value);
          }}
          sx={{
            "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root": {
              backgroundColor: "#6b6b6b",
            },
            "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root:hover": {
              backgroundColor: "#969696",
            },
            "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected":
              {
                backgroundColor: "white",
              },
            "& .css-yuzg60-MuiButtonBase-root-MuiPaginationItem-root.Mui-selected:hover":
              {
                backgroundColor: "white",
              },
          }}
        />
      </Grid>
    </Grid>
  );
}
