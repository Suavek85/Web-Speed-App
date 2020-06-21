import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

export default function SkeletonCircle() {
  return (
    <div style={{margin: '9px 7px'}}>
      <SkeletonTheme color="#bdbdbd" highlightColor="#d8d8d8">
        <Skeleton circle={true} height={56} width={54} />  
      </SkeletonTheme>
    </div>)
}
 
