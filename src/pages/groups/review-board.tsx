import React from 'react'
import { Link } from 'react-router-dom'

export default function Review_board() {

    const data = [
        {
            title: 'Population and Health Research Centre',
            href:'#'
        },
        {
            title: 'Dunkwa Municipal Hospital',
            href:'#'
        },
        {
            title: 'Municipal Directorate of Health Service',
            href:'#'
        },
    ]

  return (
    <div className='main-div'>
          <h1 className='heading'>REPRESENTATION IN THE INSTITUTIONAL REVIEW BOARD</h1>
          
            
          <div className="grid w-full place-items-center text-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => {
                  return(
                      <>
                          <div className='flex flex-col gap-4 items-center w-60 mb-10'>
                              <h1 className='text-lg text-slate-900/70 font-[600] text-center'>{item.title}</h1>
                              <Link to='#' className='p-[0.6rem] rounded-lg bg-green-600 text-slate-50 font-[600] w-34 text-center'>Read More</Link>
                         </div>
                      </>
                 )
              })}
          </div>
    </div>
  )
}
