import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

type state = {
    [x: string]: any
    name: string,
    role: string,
    qualifications: string,
    interests:string
}

export default function ScienceTeam() {
    const science_team = useSelector((state: state[]) => state.science_team);

    const team = science_team.map((person: state, index: number) => {
      return (
        <tr className='border border-slate-300 text-lg text-slate-900/70' key={index}>
          <td className='border border-slate-300 p-4 text-center font-[600] text-slate-900/80'>{person.name}</td>
          <td className='border border-slate-300 p-4 text-center'>{person.role}</td>
          <td className='border border-slate-300 p-4 text-center'>{person.qualifications}</td>
          <td className='border border-slate-300 p-4 text-center'>{person.interests}</td>
          <td className='border border-slate-300 p-4 text-center'><Link to={`/our-team/science-team/${index}`} className='font-[700] text-green-900'>View</Link></td>
        </tr>
      );
    });
  
    return (
      <div className="main-dev flex flex-col justify-center">
        <h1 className="heading text-center">OUR TEAM</h1>
  
        <table className='mb-20 border-collapse border border-slate-400'>
          <thead>
            <tr className='heading text-lg font-[500]'>
              <th className='p-4 border border-slate-300'>NAME</th>
              <th className='p-4 border border-slate-300'>CURRENT ROLE</th>
              <th className='p-4 border border-slate-300'>QUALIFICATION</th>
              <th className='p-4 border border-slate-300'>RESEARCH INTERESTS</th>
              <th className='p-4 border border-slate-300'>PROFILE</th>
            </tr>
          </thead>
  
          <tbody>{team}</tbody>
        </table>
      </div>
    );
  }
  