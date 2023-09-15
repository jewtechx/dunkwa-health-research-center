import React from 'react'
import { footerNavLinks } from '../../navigation'
import { BiLogoLinkedin, BiMailSend } from 'react-icons/bi'
import {Link} from 'react-router-dom'
import footerRibbon from '../../../assets/images/footer-ribbon.png'

export default function footer() {
  return (
    <footer className="bg-black/95 relative pt-8 w-full flex items-center justify-center" aria-labelledby="footer-heading">
    <h2 id="footer-heading" className="sr-only">
      Footer
    </h2>

    <img src={footerRibbon} className='absolute -top-[1.18rem] left-4'/>      
    <div className="mx-auto max-w-7xl px-6 pb-14 pt-6 sm:pt-10 lg:px-8 lg:pt-22">
      <div className="xl:grid xl:grid-cols-3 xl:gap-8 xl:ml-24">
        
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div className="md:grid md:grid-cols-1 md:gap-8">
            <div>   
              <h3 className="text-2xl font-thin text-white leading-8 mb-4">Newsletter</h3>
               <p className='text-slate-500 w-full'>Keep up on our news events updates . Enter your e-mail and subscribe to our newsletter.</p>
               <div className="flex p-2 rounded-md bg-slate-200 gap-2  mt-2 justify-between">
                  <input type="text" name='email' placeholder='Email Address...' className='bg-transparent outline-none w-3/4' />
                  <button type='submit' className='text-slate-500 text-lg pl-2 border border-l-gray-900/10 cursor-pointer'>Go!</button>
               </div>
            </div>
    
          </div>
          <div className="md:grid md:grid-cols-2 md:gap-8">
            <div>
              <h3 className="text-2xl font-thin text-white">Latest Tweets</h3>
              <p className='text-slate-500'>please wait...</p>
            </div>
            <div className="mt-10 md:mt-0 w-[110%]  ">
              <h3 className="text-2xl text-white font-thin">Contact Us</h3>
              <ul role="list" className="mt-6 space-y-4">
                {footerNavLinks.contact.map((item) => (
                  <li key={item.name} className='flex items-center gap-1 text-slate-500 text-[0.75rem]'>
                        <span className='h-4 w-4'>{item.icon}</span>
                        <span className='font-semibold'>{item.name}</span>
                        <span>{item.value}</span>
                  </li>
                ))}
                        <span className='flex items-center gap-1 text-slate-500  text-[0.95rem]'>
                            <span className='h-4 w-4'><BiMailSend/></span>
                            <span className='font-semibold'>Email:</span>
                            <a href="mailto:dunkwaphrc@gmail.com" className='hover:text-slate-100 hover:underline'>dunkwaphrc@gmail.com</a>
                        </span>
              </ul>
            </div>
            
          </div>
          
        </div>
        <div className="space-y-8 xl:ml-16">
            <h2 className='text-slate-100 font-thin sm:mt-2 text-2xl'>Follow Us</h2>
          <div className="flex space-x-6 ">
            {footerNavLinks.social.map((item) => (
              <a key={item.name} href={item.href} className="text-gray-500 hover:text-gray-400">
                <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" aria-hidden="true" />
                </a>
            ))}
                <a href='https://www.linkedin.com'>
                   <BiLogoLinkedin className="h-6 w-6 text-gray-500 hover:text-gray-400" aria-hidden="true" />
                </a>
          </div>
        </div>
      </div>
      <div className="absolute left-0 -bottom-28 right-0 flex justify-between items-center bg-[#034004] border-t border-white/10 py-8 px-6">
        <div className="flex flex-col">
                      <p className="text-md leading-6 text-gray-400">&copy;  Copyright 2022. All Rights Reserved</p>
                      <p className="text-md leading-6 text-gray-400">Designed & Developed by <a href='https://github.com/xjmaine' className='text-slate-100 hover:underline' > T. Clarika Digital</a></p>
                      
        </div>

        <div className="flex text-slate-200/80 text-lg">
            <Link to={'faq'} className='px-2'>FAQs</Link>
            <Link to={'contact'} className='px-2 border-l'>Contact</Link>
        </div>
      </div>
    </div>
  </footer>

  )
}
