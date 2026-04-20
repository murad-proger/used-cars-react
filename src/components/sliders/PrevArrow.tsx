import React from 'react'

type PrevArrowProps = {
  onClick?: () => void
}

export const PrevArrow = ({onClick}:PrevArrowProps) => {
  return (
    <div className="slider_arrow arrow_left" onClick={onClick}>
      <span></span>
    </div>
  )
}