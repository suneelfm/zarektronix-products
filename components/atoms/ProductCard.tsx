import { Card, CardMedia, Grid, Typography } from "@mui/material";
import React from "react";
import { IProductCardProps } from "../../types/types";
import styles from "../../styles/Atoms.module.css";

export default function ProductCard(props: IProductCardProps) {
  const { onCardClick, details } = props;
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} height="250px" p={2}>
      <Card className={styles.productCard} onClick={() => onCardClick(details)}>
        <CardMedia
          component="img"
          height="100%"
          image={details.image}
          alt={details.name}
        />
        <Grid className={styles.productCardBottomContent}>
          <Grid container px={2} height={"100%"} alignItems={"center"}>
            <Grid item xs={8} sx={{ fontSize: "0.8vw" }}>
              <Typography variant="h6">{details.name}</Typography>
            </Grid>
            <Grid item xs={4} sx={{ fontSize: "0.8vw" }}>
              <Typography variant="body1">
                {details.price}
                <span className={styles.rs}>Rs.</span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}
