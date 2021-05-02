import React,{useState} from 'react'
import Button from './button'
import Number from './number'




function Base() {
     
     const [value,setvalue]=useState(0)
     const plus=()=>setvalue(value+ 1)
    return(
     <div>
         <Button plus={plus} />
         <Number number={value}/>
     </div>
    )
}

export default Base