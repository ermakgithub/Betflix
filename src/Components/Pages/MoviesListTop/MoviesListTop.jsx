import React, {useState} from 'react';
import {useGetFilmsTopQuery} from "../../../services/kinopoiskApi.js";
import {TOP_LISTS} from "../../../constant.js"
import {useLocation, useNavigate} from "react-router-dom";
import {Button, Stack, Typography} from "@mui/material";
import MoviesList from "../../ui/MoviesList/MoviesList.jsx";
import {ArrowBack} from "@mui/icons-material";

export default function MoviesListTop() {
    const location = useLocation();
    const [page, setPage]= useState(1);
    const navigate = useNavigate();

    const movieType = TOP_LISTS.find(el =>el.url === location.pathname)

    const {data, error, isLoading} = useGetFilmsTopQuery({
        type: movieType.value,
        page: 1
    });

    if (error) return <p>Some error</p>;

    if(isLoading) return <p>Loading...</p>;

    return (
        <>
            <Stack flexDirection="row" sx={{mt:2, mb:2}}>
                <Button startIcon={<ArrowBack/>} onClick={()=> navigate(-1)}/>
                <Typography variant="h4" >{movieType.title}</Typography>
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

