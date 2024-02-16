import React, { useEffect, useState } from 'react'
 import axios from 'axios'

const HomeList = ({title, FETCHURL}) => {
    const [video, setvideo]= useState([]);
    useEffect(()=>{
        axios.get(FETCHURL)
        .then((data)=>{
            setvideo(data.data.results);

        })
        .catch((error)=>{
            console.log(error);
        })
    },[FETCHURL])
    console.log(video);
    
         
       
  return (
    <>
     <h1 className='text-blue-200 md:text-2xl p-5 items-start '>{title}</h1>
    <div className='relative flex item-center'>
        <div id={'slider'} className='w-full h-full  scroll-smooth whitespace-nowrap scrollbar-hide relative'>
            <div className='w-full h-full group'>
                {video?.map((items, id)=>(
                    <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[260px] inline-block cursor-pointer transition-transform  relative top-0 left-0 p-2'>

                        <img className='w-full h-auto hover:scale-110 ' src={`https://image.tmdb.org/t/p/w500/${items?.backdrop_path}`} alt={items?.title}/>
                        <p className='h-full text-bold text-white top-30 hidden group-hover:block absolute left-0   '>{items?.title}</p>
                    </div>
                ))}
                </div>
        </div>

    </div>

    </>
  )


    
}

export default HomeList