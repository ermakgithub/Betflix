import { ArrowBack } from '@mui/icons-material';
import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  Stack,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { Link as RouterLink, useNavigate, useParams } from 'react-router-dom';
import { useGetStaffByIdQuery } from '../../../services/kinopoiskApi';
import ErrorMessage from '../../ui/ErrorMessage';
import styles from './actor.module.css';


export default function ActorDetail() {
  const [showAll, setShowAll] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, error } = useGetStaffByIdQuery(id);

  if (isLoading) {
    return (
      <Box display="flex" justifyContent="center" margin="auto">
        <CircularProgress size="8rem" />
      </Box>
    );
  }

  if (error) return <ErrorMessage />;

  return (
    <>
      <Grid container spacing={4} pt={2}>
        <Grid item size={3} md={4}>
          <img
            src={data.posterUrl}
            alt={data.nameRu}
            className={styles.img}
          />
        </Grid>
        <Grid item size={9} md={8}>
          <Stack flexDirection="row">
            <Button
              startIcon={<ArrowBack />}
              onClick={() => navigate(-1)}
              color="primary"
            ></Button>
            <Stack flexDirection="column">
              <Typography variant="h5">{data.nameRu}</Typography>
              <Typography>{data.nameEn}</Typography>
            </Stack>
          </Stack>
          <Typography gutterBottom variant="h5">
            Об актере
          </Typography>
          <Grid container>
            <Grid size={6}>
              <Typography gutterBottom>Карьера</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{data.profession}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Рост</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>{data.growth}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Дата рождения</Typography>
            </Grid>
            <Grid size={6}>
              <Typography gutterBottom>
                {data.birthday} ({data.age} лет)
              </Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Всего фильмов</Typography>
            </Grid>
            <Grid size={6}>
              <Typography>{data.films.length}</Typography>
            </Grid>

            <Grid size={6}>
              <Typography gutterBottom>Факты</Typography>
            </Grid>


            <Grid item xs={12}>
              {data.facts
                .slice(0, showAll ? data.facts.length : 8) // Показываем все или первые 8
                .map((fact, index) => (
                  <Typography gutterBottom key={index}>
                    {index + 1}. {fact}
                  </Typography>
                ))
              }
              {data.facts.length > 8 && !showAll && (
                <Button sx={{textDecoration:'none', color:'black'}} onClick={() => setShowAll(true)}>
                  Показать еще ({data.facts.length - 8})
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item size={12}>
          <Typography variant="h5" textAlign="center" mb={4}>Фильмы</Typography>
        </Grid>
      </Grid>
      <Stack>
        {data.films
          .filter(
            (item, index, self) =>
              index === self.findIndex(el => el.filmId === item.filmId),
          )
          .map((film, index) => (
            <Stack
              key={film.filmId}
              flexDirection="row"
              justifyContent="space-between"
            >
              <Typography>{index + 1}</Typography>
              <Link sx={{textDecoration:'none', color:'black'}} component={RouterLink} to={`/movie/${film.filmId}`}>
                {film.nameRu ? film.nameRu : film.nameEn}
              </Link>
              <Typography>{film.rating ? film.rating : '-'}</Typography>
            </Stack>
          ))}
      </Stack>
    </>
  );
}