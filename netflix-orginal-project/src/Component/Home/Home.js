import React from 'react';
import HomeList from '../HomeList/HomeList';
import Request from '../../Request';

const Home = () => {
  return (
    <>
      <HomeList title='Movies' FETCHURL={Request.requestMovies}/>
      <HomeList title='TV shows' FETCHURL={Request.requestTV}/>
      <HomeList title='Popular' FETCHURL={Request.requestPopular}/>
      <HomeList title='now Playing' FETCHURL={Request.requestnowPlaying}/>
      <HomeList title='up Coming' FETCHURL={Request.requestupComing}/>
      <HomeList title='top Rated' FETCHURL={Request.requsttopRated}/>
    </>
  );
}

export default Home;
