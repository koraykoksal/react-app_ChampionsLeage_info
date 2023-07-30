import React from 'react'
import { useEffect,useState } from 'react'
import {BsFillPeopleFill} from 'react-icons/bs'
import {TfiCup} from 'react-icons/tfi'
import {MdStadium} from 'react-icons/md'
import {BsPersonFill} from 'react-icons/bs'

export const WinInfo = ({clyear,championsLeage}) => {

  const [data, setdata] = useState({})

  const [showimage, setshowimage] = useState(true)

  useEffect(() => {
   
    championsLeage.map((item,i)=>{

      if(item.winner_year == clyear){
        setdata(item)
      }
  })
  
  }, [clyear])


  const handleClick=()=>{
    setshowimage(!showimage)
  }
  


  return (

    

    <div onClick={handleClick} className='max-w-lg m-auto text-center'>
      
      

      {
        showimage?(
          <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">

          <div className='max-w-xl p-3'>

            <div className='infoShow'>

            <TfiCup className='icons'/>
            <h2 className='text-black text-center text-xl p-2'> {data.kazanan_takim_adi}</h2> 
            
            </div>
            
            <img src={data.kazanan_takim_logo} className=' max-h-56 rounded-md m-auto' alt="" />

          </div>

          <div>
            <BsFillPeopleFill className='icons'/>
            <h1></h1>
          </div>

          </div>
        ):(

          <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">

          <div className='max-w-xl p-3'>

            <div className='infoShow'>
              <MdStadium className='icons'/>
              <h2 className='text-black text-center text-xl p-2'> {data.kazanan_stadyum_ismi}</h2> 
            </div>
            

            <img src={data.kazanan_stadyum_resmi} className=' max-h-56 rounded-md m-auto' alt="" />

          </div>

          <div className='infoShow'>

          <BsFillPeopleFill className='icons'/>

           <h2 className='text-black text-center text-xl p-2 justify-center items-center'> {data.stadium_kapasite}</h2>


          </div>

          </div>

        )
      }


    </div>
  )
}
