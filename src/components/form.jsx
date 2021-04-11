import React from 'react'

const Form = ({set,handle,error,color,lett}) => {
    let style="text-box"
    let val="0"
   
    if(error){
        style="text-box R"
    }
    
      
    return (
        <form onSubmit={handle} >
            <input 
            className={style}
            type="text"
            value={color}
            placeholder="#A7FC79"
            onChange={(e)=>set(e.target.value)} />
            <button className="gen" >Genaerate</button>
        </form>
    )
}

export default Form
