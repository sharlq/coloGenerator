import React from 'react'
import SingleColor from "./color"
const Colors = ({colorList,gett}) => {
    const colors = colorList.map((i)=><SingleColor hex={i.hex} type={i.type} weight ={i.weight}/>)
    return (
        <div className="colors">
           {colors} 
        </div>
    )
}

export default Colors
