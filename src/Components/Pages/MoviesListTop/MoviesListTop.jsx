import React, { useEffect, useState } from 'react';
import { useGetFilmsTopQuery } from '../../../services/kinopoiskApi.js';
import { TOP_LISTS } from '../../../constant.js';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Stack, Typography } from '@mui/material';
import MoviesList from '../../ui/MoviesList/MoviesList.jsx';
import { ArrowBack } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorMessage from '../../ui/ErrorMessage/index.js';

export default function MoviesListTop() {
  const location = useLocation();
  const [page, setPage] = useState(1);
  const navigate = useNavigate();

  const movieType = TOP_LISTS.find(el => el.url === location.pathname);

  const { data, error, isLoading } = useGetFilmsTopQuery({
    type: movieType.value,
    page,
  });

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
          color="#730000"
          startIcon={<ArrowBack />}
          onClick={() => navigate(-1)}
        />
        <Typography variant="h4" color="#730000">{movieType.title}</Typography>
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
