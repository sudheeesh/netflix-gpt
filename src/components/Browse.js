import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondcontainer from './Secondcontainer';


const Browse = () => {
   
  useNowPlayingMovies();

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondcontainer/>
    </div>
  
  )
}

export default Browse