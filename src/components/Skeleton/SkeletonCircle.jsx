import React from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"

export default function SkeletonCircle() {
  return (
    <div style={{marginLeft: '7px'}}>
      <SkeletonTheme color="#bdbdbd" highlightColor="#d8d8d8">
        <Skeleton circle={true} height={46} width={44} />  
      </SkeletonTheme>
    </div>)
}
 
