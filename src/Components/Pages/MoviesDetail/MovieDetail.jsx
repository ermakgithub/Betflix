import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useGetFilmQuery,
  useGetSequelsAndPrequelsQuery,
  useGetStaffQuery,
} from '../../../services/kinopoiskApi.js';
import { Box, Button, ButtonGroup, Grid, Stack, Typography } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorMessage from '../../ui/ErrorMessage/index.js';
import { ArrowBack, Language, Movie } from '@mui/icons-material';
import styles from './detail.module.css';
import MovieCard from '../../ui/MovieCard/MovieCard.jsx';

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
    <>
      <Grid container spacing={2} mt={2}>
        <Grid size={4}>
          <img
            src={responseFilm.data.posterUrl}
            alt={responseFilm.data.nameRu}
            className={styles.img}
            width="100%"
            height="500px"
          />
        </Grid>

        <Grid size={6}>
          <Grid container>
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

          <Grid container>
            <Grid size={6}>
              <Typography>Год</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{responseFilm.data.year}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography>Страна</Typography>
            </Grid>
            <Grid size={6}>
              {responseFilm.data.countries.map(({ country }) => (
                <Typography key={country} gutterBottom>
                  {country}
                </Typography>
              ))}
            </Grid>

            <Grid size={6}>
              <Typography>Жанр</Typography>
            </Grid>
            <Grid size={6}>
              {responseFilm.data.genres.map(({ genre }) => (
                <Typography key={genre} gutterBottom>
                  {genre}
                </Typography>
              ))}
            </Grid>

            <Grid size={6}>
              <Typography>Режиссёры</Typography>
            </Grid>
            <Grid size={6}>
              {responseStaff.data
                .filter(el => el.professionText === 'Режиссеры')
                .map(({ nameRu }) => (
                  <Typography key={nameRu} gutterBottom>
                    {nameRu}
                  </Typography>
                ))}
            </Grid>

            <Grid size={6}>
              <Typography>Время </Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>
                {responseFilm.data.filmLength} мин
              </Typography>
            </Grid>

            <Grid size={12}>
              <Typography>Описание </Typography>
            </Grid>
            <Grid size={12}>
              <Typography gutterBottom>
                {responseFilm.data.description
                  ? responseFilm.data.description
                  : 'Описание отсутствует'}
              </Typography>
            </Grid>
          </Grid>
        </Grid>

        <Grid size={2}>
          <Typography variant="h6">В главных ролях</Typography>
          {responseStaff.data
            .filter(el => el.professionText === 'Актеры')
            .slice(0, 10)
            .map(({ nameRu }) => (
              <Typography key={nameRu} gutterBottom>
                {nameRu}
              </Typography>
            ))}
        </Grid>
      </Grid>

      <Grid
        container
        spacing={2}
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Grid size={12}>
          <ButtonGroup variant="contained" size="small">
            <Button
              target="_blank"
              href={responseFilm.data.webUrl}
              endIcon={<Language />}
            >
              Кинопоиск
            </Button>
            <Button
              target="_blank"
              href={`https://www.imdb.com/title/${responseFilm.data.imdbId}`}
              endIcon={<Movie />}
            >
              IMDB
            </Button>
          </ButtonGroup>
        </Grid>
        <Grid size={12}></Grid>
          <Typography variant="h5" textAlign="center">
            Смотреть онлайн
          </Typography>
          <video/>
      </Grid>

      <Stack alignItems="center"  >
        <Typography gutterBottom variant="h5" textAlign="center">Сиквелы и приквелы</Typography>
        <Stack direction="row" spacing={5} >
          {responseSequelsAndPrequels.data.map(el => (
            <MovieCard key={el.id} movie={el} />
          ))}
        </Stack>
      </Stack>
    </>
  );
}
