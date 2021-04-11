import React from 'react'
import {useState,useEffect} from 'react'
const SingleColor = ({hex,weight,type}) => {
    const [alert,setAlert] = useState(false)
    useEffect(() => {
        const timeout = setTimeout(() => {
          setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
      }, [alert])
    return (
        <div key={weight} className="box" style={{backgroundColor:`#${hex}`}} 
        onClick={(e)=> {
            
            navigator.clipboard.writeText(`#${hex}`)
           setAlert(true)
          }}>
        <h4 className={type}>{`${weight}%`}</h4>
         <h4 className={type}>{`#${hex.toUpperCase()}`}</h4>
         {alert && <p className={type}>copied to clipboard</p>}
        </div>
    )
}

export default SingleColor
