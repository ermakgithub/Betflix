import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Rating, Stack, Tooltip, Link } from '@mui/material';
import styles from './MovieCard.module.css';

export default function MovieCard({ movie, reload = false }) {
  const linkProps = reload
    ? { component: 'a', href: `/movie/${movie.kinopoiskId}` }
    : { component: RouterLink, to: `/movie/${movie.kinopoiskId}` };
  return (
    <Stack sx={{ textDecoration: 'none' }} spacing={1}>
      <Link {...linkProps} underline="none">
        <img
          src={movie.posterUrlPreview}
          alt={movie.nameRu || movie.nameEn}
          className={styles.img}
          height="280px"
          style={{ display: 'block' }}
        />

        <Link
          component="p"
          sx={{
            width: '220px',
            display: '-webkit-box',
            WebkitLineClamp: 1,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textDecoration: 'none',
            color: '#0F214D',
            '&:hover': {
              textDecoration: 'underline',
            },
          }}
        >
          {movie.nameEn || movie.nameRu}
        </Link>
      </Link>

      {movie.ratingKinopoisk && (
        <Stack alignItems="center">
          <Tooltip title={`${movie.ratingKinopoisk} /10`}>
            <Box>
              <Rating
                name="read-only"
                value={movie.ratingKinopoisk / 2}
                readOnly
                precision={0.1}
              />
            </Box>
          </Tooltip>
        </Stack>
      )}
    </Stack>
  );
}
