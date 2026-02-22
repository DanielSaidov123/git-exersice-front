import React from 'react'

export const Gridlayout = ({id ,click,isClicked,isgrid}) => {
    return (
    <div className={`grid-color ${isClicked ? "click" : ""} ${isgrid ? "find" : ""}`}   id={id} onClick={()=>click(id)}></div>
  )
}
