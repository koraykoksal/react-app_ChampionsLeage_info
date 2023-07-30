import React from 'react'
import {championsLeage} from "../helper/cl.js"
import { useState } from 'react'
import { WinInfo } from './WinInfo.jsx'
import {TfiCup} from 'react-icons/tfi'

export const WinYear = () => {

  const [clyear, setclyear] = useState('2023')
  //const [cldata, setcldata] = useState(championsLeage)
 

  return (

    <div>
    
        <div className={`mt-[3vh] p-3 mx-auto overflow-hidden relative w-[800px] h-[80px] rounded-[8px]  flex flex-wrap justify-between`}>

        {
          championsLeage.map((item,i)=>(

            <button type="button" class="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            value={item?.winner_year} onClick={(e)=>{setclyear(e.target.value)}}>{item?.winner_year}</button>

          ))
        }
          
        </div>

        <h1 className='p-2 text-center text-2xl animate-pulse'>{clyear} WINNER</h1>

        <WinInfo clyear={clyear} championsLeage={championsLeage}/>

      </div>



  )
}
