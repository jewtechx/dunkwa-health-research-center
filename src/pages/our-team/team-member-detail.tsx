import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

type state = {
    [x: string]: any
    name: string,
    role: string,
    qualifications: string,
    interests:string
}


export default function Team_member_detail() {
    const params = useParams()

    const person = useSelector((state: state[]) => state.science_team);
  return (
      <div className='main-div'>
          <div className="flex flex-col gap-4">
              <img className='w-40 h-40'/>
               <div className="flex flex-col gap-2">
                  
               </div>
               <h1>Member {person[params.id].name}</h1>
          </div>
    </div>
  )
}
