import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Abrahamoduro from './abrahamoduro'
import BAwuah from './bawuah'
import Acolor from './acolor'
import Annan from './annan'

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
      {params.id == '0' && <Abrahamoduro />}
      {params.id == '1' && <BAwuah />}
      {params.id == '2' && <Acolor />}
      {params.id == '3' && <Annan />}
    </div>
  )
}
