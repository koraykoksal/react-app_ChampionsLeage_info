import React from 'react'
import { useEffect,useState } from 'react'


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
  


  return (


    <>
      




      {
        showimage?(
          <div class="max-w-lg bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-auto">

          <div className='max-w-xl p-3'>

            <h2 className='text-black text-center text-xl p-2'> {data.kazanan_takim_adi}</h2> 

            <img src={data.kazanan_takim_logo} className=' max-h-56 rounded-md m-auto' alt="" />

          </div>

      </div>
        ):(alert('fff'))
      }


    </>
  )
}
