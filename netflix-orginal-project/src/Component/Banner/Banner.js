import React, { useEffect,useState} from 'react'
import Request from '../../Request';
import axios from 'axios';
const Banner = () => {
    const [movies, setmovies] =useState([])
    const movie= movies[Math.floor(Math.random()*movies.length)];
    
    useEffect(()=>{
axios.get(Request.requestMovies).then((res)=>{
    setmovies(res.data.results);
})

    },[])
    const fontdecrease=(string, number)=>{
        if(string?.length>number){
            return string.slice(0,number) + "..."
        }
        else{
            return string;
        }

    }
    console.log(movie);
  return (
    <>
    <div className='w-full h-[800px]  '>
        <div className='w-full h-full '>
            <img className='w-full h-full ' src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie?.title}/>
<div className='  m-10  top-[20%] left-20 absolute'><p className='text-gray-400 md:text-5xl sm:text-sm md:font-bold sm:font-sm '>{movie?.title}</p></div>
<div className='absolute top-[30%] left-20 my-10'><button className='text-blue-400 bg-green-400 p-2 w-24 m-4 rounded'>Play</button>
<button className='text-blue-400 bg-gray-400 p-2 w-24 m-4 rounded'>watch later</button></div>
<div className='text-gray-200 opacity-100 top-[40%] my-10 left-20 absolute sm:font-3xl md:font-5xl'>Relase date:{movie?.release_date}</div>
<div className='text-gray-200 opacity-100 top-[50%] sm:w-[75%] w:md-[50%] w-lg[45%] xl:w-[35%]  my-10 left-20 absolute sm:font-3xl md:font-5xl'>{fontdecrease(movie?.overview,150)}</div>
        </div>
    </div>
    
    </>
  )
}

export default Banner