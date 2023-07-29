import React from 'react'
import {championsLeage} from "../helper/cl.js"



export const WinYear = () => {


  return (

    <div>
    
        <div className={`mt-[3vh] p-3 mx-auto overflow-hidden relative w-[800px] h-[80px] rounded-[8px] bg-green-700 blur-[0.5px] flex flex-wrap justify-between`}>

        {
          championsLeage.map((item,i)=>(
            <button value={item?.winner_year} onClick={(e)=>{console.log(e.target.value)}}>{item?.winner_year}</button>
          ))
        }
          
        </div>

      </div>
  )
}
