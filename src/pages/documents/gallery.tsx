import React from 'react'
import gallery1 from '../../assets/images/gallery/g1.png'
import gallery2 from '../../assets/images/gallery/g2.png'
import gallery3 from '../../assets/images/gallery/g3.png'
import gallery4 from '../../assets/images/gallery/g4.png'
import gallery5 from '../../assets/images/gallery/g5.png'
import gallery6 from '../../assets/images/gallery/g6.png'
import gallery7 from '../../assets/images/gallery/g7.png'
import gallery8 from '../../assets/images/gallery/g8.png'
import { ArrowCircleLeft2, CloseCircle } from 'iconsax-react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline'


export default function Gallery(){
    const images = [gallery1,gallery2,gallery3,gallery4,gallery5,gallery6,gallery7,gallery8]

    const previewRef = React.useRef<HTMLInputElement>()
    const imageRef = React.useRef<HTMLPictureElement>()
    const previewImageRef = React.useRef<HTMLPictureElement>()
    
    const [indexImg,setIndexImg] = React.useState<number>(0)


    function setPreview(index:number){
        previewRef.current.style.display = "flex"
        previewImageRef.current.src = images[index]
    } 
    
    function closePreview(){
        previewRef.current.style.display = "none"
    }
    
    function setIndexIncrement(){
        setIndexImg(num => num - 1)
        if (indexImg < 1) {setIndexImg(images.length - 1) }
        if (indexImg > images.length) { setIndexImg(0) }
        
        previewRef.current.style.display = "flex"
        previewImageRef.current.src = images[indexImg]
    }
    
    
    function setIndexDecrement(){
        setIndexImg(num => num - 1)
        if (indexImg < 1) {setIndexImg(images.length - 1) }
        if (indexImg > images.length) { setIndexImg(0) }
        
        previewRef.current.style.display = "flex"
        previewImageRef.current.src = images[indexImg]
    }


  return (
    <div className="main-div h-max">
          <h1 className='heading text-center shadow-mg'>GALLERY</h1>
          
          <div className="grid place-items-center gap-4 grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
              {images.map((image, index) => {
                  return (
                      <>
                          <div key={image} className="w-full lg:w-50 h-[500px] md:h-[200px] rounded-lg p-1 shadow-md mb-2">
                              <img ref={ imageRef} src={image} className=" cursor-pointer inset-0 w-full h-full object-cover" alt="Image" onClick={() => setPreview(index)}   />  
                        </div>
                      </>
                  )
              })}
          </div>


          <div ref={previewRef} className="hidden overflow-y-scroll items-center justify-center w-full h-screen bg-slate-900/50 backdrop-blur-xs fixed top-0 left-0 right-0 bottom-0 p-8 z-40">
              <div className="mt-80 z-50 h-80vh p-4 pt-0 max-w-[1000px] w-[900px] bg-slate-50 rounded-lg ">
                  <div className="flex justify-between items-center p-4">
                      <h1 className="text-[1rem] md:text-[1.6rem] text-slate-900/80 font-[500]">Site for the proposed centre</h1>
                      <CloseCircle className="text-slate-400 cursor-pointer" onClick={closePreview}/>    
                  </div>

                  <img src={gallery1} ref={previewImageRef} className='object-fill w-full h-full'/>

                  <div className='flex justify-between items-center pt-2'>
                      <ArrowLeftIcon className="w-10 h-10 text-slate-100 font-[800] rounded-md cursor-pointer p-2 bg-red-600/70" onClick={() => setIndexDecrement()}/>
                      <ArrowRightIcon className="w-10 h-10 text-slate-100 font-[800] rounded-md cursor-pointer p-2 bg-red-600/70" onClick={() => setIndexIncrement()}/>
                  </div>
              </div>
          </div>
    </div>
  )
}
