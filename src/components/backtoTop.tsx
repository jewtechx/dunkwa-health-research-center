import { ArrowUpIcon } from '@heroicons/react/24/outline';
import { ArrowUp } from 'iconsax-react';
import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';

const ScrollButton = () =>{

const [visible, setVisible] = useState(false)

const toggleVisible = () => {
	const scrolled = document.documentElement.scrollTop;
	if (scrolled > 300){
	setVisible(true)
	}
	else if (scrolled <= 300){
	setVisible(false)
	}
};

const scrollToTop = () =>{
	window.scrollTo({
	top: 0,
	behavior: 'smooth'
	/* you can also use 'auto' behaviour
		in place of 'smooth' */
	});
};

window.addEventListener('scroll', toggleVisible);

return (
	<button style={{display: visible ? 'inline' : 'none'}} className='p-4 rounded-lg fixed right-8 z-30 bottom-1 text-slate-100 font-[700] animate-bounce bg-slate-900/70'>
	<ArrowUpIcon onClick={scrollToTop}
	style={{display: visible ? 'inline' : 'none'}} className='w-8 h-8'/>
	</button>
);
}

export default ScrollButton;
