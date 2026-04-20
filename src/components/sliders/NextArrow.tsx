import React from 'react'

type NextArrowProps = {
  onClick?: () => void
}

export const NextArrow = ({onClick}:NextArrowProps) => {
  return (
    <div className="slider_arrow arrow_right" onClick={onClick}>
      <span></span>
    </div>
  )
}