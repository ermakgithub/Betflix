
import { useGetFilmsTopQuery, useGetFilmsQuery } from '../services/kinopoiskApi.js';
import { TOP_LISTS } from '../constant.js';
import { useSelector } from 'react-redux';

function UseMoviesQuery() {

  const { countries, order,   year, page } = useSelector(state => state.currentQuerySlice);

  const responsePopular = useGetFilmsTopQuery({
    type: TOP_LISTS[0].value,
    page,
  });

  const responseBest = useGetFilmsTopQuery({
    type: TOP_LISTS[1].value,
    page,
  });

  const responseFilms = useGetFilmsQuery({
    type: 'FILM',
    countries,
    genreId:'1',
    order,
    year,
    page,


  });

  const responseSerials= useGetFilmsQuery({
    type: 'TV_SERIES',
    countries,
    genreId: '1',
    order,
    year,
    page,
  });

  const responseCartoons= useGetFilmsQuery({
    type: 'FILM',
    countries,
    genreId: '18',
    order,
    year,
    page,
  });

  const isLoading = responsePopular.isFetching ||
    responseBest.isFetching ||
    responseFilms.isFetching ||
    responseSerials.isFetching ||
    responseCartoons.isFetching;

  const hasError = responsePopular.error ||
    responseBest.error ||
    responseFilms.error ||
    responseSerials.error ||
    responseCartoons.error;


  return {
    isLoading,
    hasError,
    responsePopular,
    responseFilms,
    responseSerials,
    responseCartoons,
    responseBest,
  };


}

export default UseMoviesQuery;