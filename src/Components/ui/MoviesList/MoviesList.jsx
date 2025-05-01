import React from 'react';
import {Stack} from "@mui/material";

import MovieCard from "../MovieCard/MovieCard.jsx";

export default function MoviesList({movies,totalPages,page,setPage}) {
    return (
        <>
            <Stack direction="row"
                   justifyContent="space-between"
                   flexWrap="wrap"
            >
                {movies.map(movie =>(
                 <MovieCard key = {movie.kinopoiskId} movie={movie}/>
                ))}
            </Stack>
        </>
    );
}

