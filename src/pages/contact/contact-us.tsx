import { PhoneIcon } from '@heroicons/react/24/outline'
import { Location } from 'iconsax-react'
import React from 'react'
import { BiMailSend } from 'react-icons/bi'

export default function ContactUs() {
  return (
    <div className='main-div w-[95%] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center lg:place-items-start'>
        <div className="flex flex-col gap-2">
              <h1 className='text-3xl font-[500]'>Contact <span className='font-[200]'>Us</span></h1>  

              <div className="flex gap-2">
                    <div className="flex flex-col gap-2">
                        <p className='text-slate-600 text-xs'>Your name *</p>
                        <input type='text' className='rounded-md p-2 border border-slate-300/90 outline-none' />
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className='text-slate-600 text-xs'>Your email address *</p>
                        <input type='text' className='rounded-md p-2 border border-slate-300/90 outline-none' />
                    </div>
              </div>  

              <div className="flex flex-col gap-2">
                        <p className='text-slate-600 text-xs'>Subject *</p>
                        <input type='text' className='rounded-md p-2 border border-slate-300/90 outline-none' />
              </div>

              <div className="flex flex-col gap-2">
                        <p className='text-slate-600 text-xs'>Subject *</p>
                        <textarea className='rounded-md p-2 border border-slate-300/90 h-40 w-full outline-none'/>
              </div>

              <button type="submit" className="p-2 bg-green-900/90 w-[150px] rounded-md mt-4 text-md text-slate-100 font-[600]">Send Message</button>
       </div>

          

        
          <div className="flex flex-col gap-2 mt-20 lg:mt-1">
              <h1 className='text-lg pb-10 text-green-800 text-left'>Get in <span className='font-[700]'>Touch</span></h1>
        
              <h1 className="heading px-0">LOCATION</h1>

              <div className="flex flex-col gap-2">
                  <div className="flex gap-2 items-center">
                      <Location className='p-2 rounded-full bg-green-900 w-8 h-8 text-slate-100 ' />
                      <h2 className='font-[600] text-slate-900/70'>Address:</h2>
                      <p className='text-sm text-slate-900/60'>Dunkwa-on-Offin, Ghana</p>
                  </div>

                  <div className="ml-8 flex gap-2 items-center">
                      <PhoneIcon className='w-3 h-3'/>
                      <h2 className='font-[600] text-slate-900/70'>Phone:</h2>
                      <p className='text-sm text-slate-900/60'>+233 (0) 50 469 8534</p>
                  </div>

                  <div className="ml-8 flex gap-2 items-center">
                      <BiMailSend className='w-3 h-3'/>
                      <h2 className='font-[600] text-slate-900/70'>Mail:</h2>
                      <a href="mailto:dunkwaphrc@gmail.com" className='text-sm text-slate-900/60 hover:underline hover:text-blue-500'>dunkwaphrc@gmail.com</a>
                  </div>

                  <div className="ml-8 flex gap-2 items-center">
                      <Location className='w-3 h-3'/>
                      <h2 className='font-[600] text-slate-900/70'>Digital Address:</h2>
                      <p className='text-sm text-slate-900/60 hover:underline hover:text-blue-500'>CU000397-50</p>
                  </div>
              </div>
          </div>
    </div>
  )
}
