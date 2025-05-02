import React from 'react';
import { Stack } from '@mui/material';
import Pagination from '@mui/material/Pagination';
import MovieCard from '../MovieCard/MovieCard.jsx';

export default function MoviesList({ movies, totalPages, page, setPage }) {
  return (
    <>
      <Stack
        direction="row"
        justifyContent="space-between"
        flexWrap="wrap"
        alignItems="center"
      >
        {movies.map(movie => (
          <MovieCard key={movie.kinopoiskId} movie={movie} />
        ))}
      </Stack>

      <Stack spacing={2} alignItems="center" sx={{ my: 4 }}>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="circular"
          size="large"
          page={page}
          onChange={(_, value) => setPage(value)}
        />
      </Stack>
    </>
  );
}