import * as React from 'react';
import { SongList } from './_listPlayerComp/_list/SongList';
import useHome from './useHome';

const Home = React.memo(() => {
  
  // const { data } = useHome() 

  return(
    <>
      <SongList playlistId={1} />
    </>
  )
});

export default Home;