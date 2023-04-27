"use client"

import Skeleton from "@mui/material/Skeleton";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return <div><Skeleton variant="rectangular" width={210} height={60}></Skeleton></div>
  }