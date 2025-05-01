import React from 'react';
import {Link as RouterLink} from "react-router-dom";
import {Box, Rating, Stack, Tooltip, Link} from "@mui/material";
import styles from './MovieCard.module.css'


export default function MovieCard({movie}) {
    return (

        <Stack  >
            <RouterLink to={`/movie/${movie.kinopoiskId}`}>
                <img src={movie.posterUrlPreview}
                     alt={movie.nameRu}
                     className={styles.img}
                />
            </RouterLink>

            <Link component={RouterLink}
                  to={`/movie/${movie.kinopoiskId}`}
                  textAlign="center"
                  sx={{width:'200px'}}

            >
                {movie.nameEn ? movie.nameEn : movie.nameRu}
            </Link>

            {movie.ratingKinopoisk && (
                <Stack alignItems="center" >
                   <Tooltip title={`${movie.ratingKinopoisk} /10`}>
                       <Box>
                        <Rating name="read-only"
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

