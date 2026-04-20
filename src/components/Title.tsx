import React from 'react'

type TitleProps = {
  children: React.ReactNode;
  page?: boolean;
  className?: string
}

export const Title = ({children, page, className=""}: TitleProps) => 
  page
   ? <h1 className={className}>{children}</h1> 
   : <h2 className={className}>{children}</h2>