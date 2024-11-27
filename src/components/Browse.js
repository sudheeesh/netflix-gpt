import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import Maincontainer from './Maincontainer';
import Secondcontainer from './Secondcontainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useAiringMovies from '../hooks/useAiringMovies';
import useOnTheAirMovies from '../hooks/useOnTheAirMovies';


const Browse = () => {
   
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();
  useAiringMovies();
  useOnTheAirMovies();

  return (
    <div>
      <Header/>
      <Maincontainer/>
      <Secondcontainer/>
    </div>
  
  )
}

export default Browse