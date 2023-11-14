"use client";

import { Paper } from "@mui/material";
import React from "react";

const HalfCircularBorder = () => {
  const halfCircularBorderStyle = {
    width: 200,
    height: 100,
    borderRadius: "50% 0 50% 50%", // This creates the half-circular border
    backgroundColor: "lightblue",
    textAlign: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return <Paper sx={halfCircularBorderStyle}>Half Circular Border</Paper>;
};

export default HalfCircularBorder;
