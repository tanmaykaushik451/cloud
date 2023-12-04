import React from 'react'

const Cell = ({currency,className,value}) => {
   return <span className={`${className} bold`}>{value ? `${currency}${value?.toLocaleString("en-US")}`:"N/A"}</span>
}

export default Cell
