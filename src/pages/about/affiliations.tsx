import { Link } from "react-router-dom";

export default function Affiliations(){
    return(
        <>
            <div className="main-div">
                <h1 className="heading">AFFILIATIONS</h1>
            <div className="w-full place-items-center grid py-6 bg-blue-100/10">
            <div className='flex flex-col gap-4 items-center w-full  my-10'>
                              <h1 className='text-xl text-slate-900/70 font-[600] text-center'>Research & Development Division</h1>
                              <p className='text-lg text-slate-900/70 text-center'>Ghana Health Service</p>
                              <Link to='#' className='p-[0.6rem] rounded-lg bg-green-600 text-slate-50 font-[600] w-34 text-center'>Read More</Link>
                         </div> 
            </div>
          </div>
        </>
    )
}