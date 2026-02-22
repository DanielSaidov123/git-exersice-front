import React from 'react'

export const Gridlayout = ({id ,click}) => {
    return (
    <div className='grid-color' id={id} onClick={()=>click(id)}></div>
  )
}
