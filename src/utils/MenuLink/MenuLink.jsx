import React from 'react'
import { Link } from 'react-router-dom'

export default function MenuLink(props) {
  
  const { linkPath, content } = props

  return (
    <Link to={ linkPath } style={{textDecoration: 'none'}} >
      <h2>{ content }</h2>
    </Link>
  )
}