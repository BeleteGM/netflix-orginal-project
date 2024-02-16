
const API_KEY= '0be0b0ed07a4ac92637c26e1eff9949c'
const Request= {
    requestMovies:`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
    requestTV: `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&language=en-US&page=1`,
   requestnowPlaying: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&page=1`,
   requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
requsttopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
 requestupComing:`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`


}
   
export default Request;


     

    