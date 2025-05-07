import faq from "../API/faq.json";
import React, { useEffect, useState } from 'react'
import { FAQ } from "./UI/FAQ";

const Accordian = () => {
    const[data,setData]=useState([]);
    const[activeId,setActiveId]=useState(false);
    useEffect(()=>{
        setData(faq);
    },[]);

    // handleButton

    const handleButton=(id)=>{
     setActiveId((prevID)=>(prevID===id)?false:id)
    }



  return(
    <>
    <h1>The Accordion</h1>
    <ul className="section-accordion">
        {
            data.map((curElem)=>{
                return(
                    <FAQ key={curElem.id} curData={curElem} isActive={activeId===curElem.id}
                    onToggle={()=>handleButton(curElem.id)}
                    />

                )
            })
        }
    </ul>
    </>
  )
}

export default Accordian