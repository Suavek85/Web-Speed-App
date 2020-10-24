import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

export default function SkeletonText() {
  return (
    <SkeletonTheme color="#bdbdbd" highlightColor="#d8d8d8">
      <Skeleton width={50} />
    </SkeletonTheme>
  )
}
 