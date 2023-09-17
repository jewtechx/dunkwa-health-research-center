import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Abrahamoduro from './abrahamoduro'
import BAwuah from './bawuah'
import Acolor from './acolor'
import Annan from './annan'
import Opare from './opare'
import James from './james'
import Ellen from './ellen'

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
      {params.id == '4' && <Opare />}
      {params.id == '5' && <James />}
      {params.id == '6' && <Ellen />}
    </div>
  )
}
