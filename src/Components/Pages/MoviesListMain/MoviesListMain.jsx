import React, { useEffect, useState } from 'react';
import { MOVIE_LISTS } from '../../../constant.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import MoviesList from '../../ui/MoviesList/MoviesList.jsx';
import { ArrowBack } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorMessage from '../../ui/ErrorMessage/index.js';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi.js';
import { useSelector } from 'react-redux';

export default function MoviesListMain() {
    const location = useLocation();
  const {countries, order, year, genreId} = useSelector(state => state.currentQuery);
    const [page, setPage] = useState(1);
    const navigate = useNavigate();


    const movieType = MOVIE_LISTS.find(el => el.url === location.pathname);
    const myGenreId = movieType.url === '/cartoons' ? 18 : genreId

    const {data, error, isLoading} = useGetFilmsQuery({
      type: movieType.value,
      countries, order, year, genreId : myGenreId, page
    })


    useEffect(() =>{
        setPage(1)
    },[location])


    if (error) return <ErrorMessage  />;

    if (isLoading)
        return (
          <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'left',
                marginTop: '1.5rem',
            }}
          >
              <Typography>Loading...</Typography>
              <CircularProgress color="black" />
          </Box>
        );

    return (
      <>
          <Stack flexDirection="row" sx={{ mt: 2, mb: 2 }}>
              <Button
                color="#000000"
                startIcon={<ArrowBack />}
                onClick={() => navigate(-1)}
              />
              <Typography variant="h4">{movieType.title}</Typography>
          </Stack>

          <MoviesList
            movies={data.items}
            totalPages={data.totalPages}
            page={page}
            setPage={setPage}
          />
      </>
    );
}
