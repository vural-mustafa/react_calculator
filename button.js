import React from 'react'
import './button.css'
function Button({symbol,color,handleclick}){
  return (
    
    <div
    onClick={()=>handleclick(symbol)} 
    className='button-wrapper' style={{backgroundColor : color}}>{symbol}</div>
  )
}

export default Button