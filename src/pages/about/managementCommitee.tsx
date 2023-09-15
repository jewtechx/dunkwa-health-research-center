import React from 'react'
import { Link } from 'react-router-dom'

export default function ManagementCommitee() {
    const data = [
        {
            title: 'Director',
            sector: 'PHRC',
            href : '#'
        },
        {
            title: 'Head',
            sector: 'Administration',
            href : '#'
        },
        {
            title: 'Head',
            sector: 'Finance',
            href : '#'
        },
        {
            title: 'Head',
            sector: 'Clinical Science',
            href : '#'
        },
        {
            title: 'Head',
            sector: 'Biomedical Science',
            href : '#'
        },
        {
            title: 'Head',
            sector: 'Data Science',
            href : '#'
        },
        {
            title: 'Head',
            sector: 'Social & Population Science',
            href : '#'
        },
    ]
  return (
    <div className='main-div'>
          <h1 className='heading'>MANAGEMENT COMMITEE</h1>
          
          <div className='flex flex-wrap items-center justify-center gap-6'>
          {data.map((item) => {
                  return(
                      <>
                          <div className='flex flex-col gap-4 items-center w-60 mb-10'>
                              <h1 className='text-xl text-slate-900/70 font-[600] text-center'>{item.title}</h1>
                              <p className='text-lg text-slate-900/70 text-center'>{item.sector}</p>
                              <Link to='#' className='p-[0.6rem] rounded-lg bg-green-600 text-slate-50 font-[600] w-34 text-center'>Read More</Link>
                         </div>
                      </>
                 )
              })}
          </div>
    </div>
  )
}
