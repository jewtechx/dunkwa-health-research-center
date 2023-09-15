import React from 'react'
import organogram from '../../assets/images/organogram.jpg'


export default function Organogram() {
  return (
      <div className='main-div'>
          <h1 className='heading text-center z-10'>ORGANOGRAM</h1>
      <img src={organogram} className='-z-20' />
    </div>
  )
}
