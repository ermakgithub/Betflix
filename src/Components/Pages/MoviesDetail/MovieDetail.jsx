import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
} from '../../../services/kinopoiskApi.js';
import { Box, Button, Grid, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorMessage from '../../ui/ErrorMessage/index.js';
import { ArrowBack } from '@mui/icons-material';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const responseFilm = useGetFilmQuery(id);

  const responseSequelsAndPrequels = useGetSequelsAndPrequelsQuery(id);

  const responseStaff = useGetStaffQuery(id);

  if (
    responseFilm.isLoading ||
    responseSequelsAndPrequels.isLoading ||
    responseStaff.isLoading
  ) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'left',
          marginTop: '1.5rem',
        }}
      >
        <Typography fontSize="3rem">Loading...</Typography>
        <CircularProgress color="black" size="5rem" />
      </Box>
    );
  }

  if (responseFilm.error || responseStaff.error) {
    return <ErrorMessage />;
  }

  return (
    <Grid container spacing={2}>
      <Grid size={4}>
        <img
          src={responseFilm.data.posterUrl}
          alt={responseFilm.data.nameRu}
          width="100%"
        />
      </Grid>
      <Grid size={6}>
        <Grid container >
          <Grid size={2}>
            <Button
              startIcon={<ArrowBack />}
              size="large"
              onClick={() => navigate(-1)}
            />
          </Grid>
          <Grid size={4} alignContent="center">
            <Typography variant="h5">{responseFilm.data.nameRu}</Typography>
          </Grid>
        </Grid>


        <Grid container >
          <Grid size={6}>
            <Typography>Year</Typography>
          </Grid>
          <Grid size={6}>
            <Typography gutterBottom>{responseFilm.data.year}</Typography>
          </Grid>

          <Grid size={6}>
            <Typography>Country</Typography>
          </Grid>
          <Grid size={6}>
            {responseFilm.data.countries.map(({country}) =>(
              <Typography key={country} gutterBottom>{country}</Typography>
            ))}
          </Grid>

          <Grid size={6}>
            <Typography>Genre</Typography>
          </Grid>
          <Grid size={6}>
            {responseFilm.data.genres.map(({genre}) =>(
              <Typography key={genre} gutterBottom>{genre}</Typography>
            ))}
          </Grid>

          <Grid size={6}>
            <Typography>The directors</Typography>
          </Grid>
          <Grid size={6}>
            {responseStaff.data.genres.map(({genre}) =>(
              <Typography key={genre} gutterBottom>{genre}</Typography>
            ))}
          </Grid>
        </Grid>
      </Grid>


      <Grid size={2}>Actors</Grid>
    </Grid>
  );
}
