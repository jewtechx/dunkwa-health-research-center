import React from 'react'
import { Link } from 'react-router-dom'

export default function AdvisoryBoard() {
    const data = [
        {
            title: 'Representative',
            location: 'University of Cape Coast',
            href:'#'
        },
        {
            title: 'Former Director',
            location: 'Population and Health Research Centre',
            href:'#'
        },
        {
            title: 'Director',
            location: 'Population and Health Research Centre',
            href:'#'
        },
        {
            title: 'Two Preeminent citizens of Ghana (one being female)',
            location: 'Ghana',
            href:'#'
        },
    ]
  return (
    <div className='main-div'>
          <h1 className='heading'>PROVISIONAL ADVISORY BOARD</h1>
          
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-20'>
              {data.map((item) => {
                  return(
                      <>
                          <div className='flex flex-col gap-4 items-center'>
                              <h1 className='text-xl text-slate-900/70 font-[600] text-center'>{item.title}</h1>
                              <p className='text-lg text-slate-900/70 text-center'>{item.location}</p>
                              <Link to='#' className='p-[0.7rem] rounded-lg bg-green-600 text-slate-50 font-[600] w-34 text-center'>Read More</Link>
                         </div>
                      </>
                 )
              })}
          </div>
    </div>
  )
}
