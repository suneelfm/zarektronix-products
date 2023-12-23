import { Grid, IconButton, Rating, Tooltip, Typography } from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { IProduct } from "../../types/types";
import styles from "../../styles/ProductDetails.module.css";
import { getProduct } from "../../services/products";

export default function ProductDetails() {
  const [details, setDetails] = useState<IProduct>();
  const router = useRouter();

  const getProductDetails = async () => {
    const { data, error } = await getProduct(router.query.productId as string);
    if (data) {
      setDetails(data);
    } else if (error) console.error(error);
  };
  useEffect(() => {
    if (router.query.productId) getProductDetails();
  }, [router.query.productId]);

  return (
    details && (
      <Grid className={styles.main}>
        <Grid container className={styles.header}>
          <Grid item xs={6}>
            Product Details
          </Grid>
          <Grid container item xs={6} justifyContent={"flex-end"}>
            <Tooltip title="Back to Listing" arrow placement="top">
              <IconButton
                className={styles.backButton}
                onClick={() => router.back()}
              >
                <span>&#x276E;</span>
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <Grid container p={5} className={styles.contentWrapper}>
          <Grid item xs={12} sm={6} md={5} className={styles.imageWrapper}>
            <Grid
              className={styles.image}
              sx={{ backgroundImage: `url(${details?.image})` }}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm={6}
            md={7}
            sx={{
              padding: { xs: "40px 0px", sm: "40px 0px 40px 20px", md: "40px" },
            }}
          >
            <Typography variant="h4" mb={3}>
              {details?.name}
            </Typography>
            <Typography variant="h6" mb={3}>
              <b>Price:</b> ₹ {details?.price}
            </Typography>
            <Typography variant="h6">
              <b>Total products available:</b> {details?.quantity}
            </Typography>
            <Grid pt={3}>
              <Rating
                sx={{ "& .MuiRating-icon": { color: "#faaf00" } }}
                precision={0.5}
                value={details?.rating}
                readOnly
              />
            </Grid>
          </Grid>
          <Grid container mt={5}>
            {details?.description}
          </Grid>
        </Grid>
      </Grid>
    )
  );
}
