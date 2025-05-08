import React , {useState, useEffect} from 'react';
import { Autocomplete, TextField } from '@mui/material';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi.js';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../../feature/searchQuerySlice.js';

const movieTypes={
  FILM: "Фильм",
  TV_SERIES:"Сериал",
  TV_SHOW:"ТВ шоу",
  MINI_SERIES:"Мини-сериал"
}


function Search() {
  const [input, setInput] =  useState('');
  const dispatch = useDispatch();

  const { countries, genreId, order, type, year, page, keyword } = useSelector(
    state => state.searchQuerySlice,
  );

  useEffect(() =>{
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input }));
    }, 500);

      return()=> clearTimeout(setTimeoutId);
  }, [input]);

  const { data, isLoading } = useGetFilmsQuery({
    countries,
    genreId,
    order,
    type,
    page,
    year,
    keyword,
  });

  return (
    <Autocomplete
      freeSolo
      sx={{ width: 300 }}
      options={data ? data.items.map(option => `${option.nameRu}-${movieTypes[option.type]} -${option.year}`) : []}
      onInputChange={(_,value)=>{
          setInput(value);
      }}
      renderInput={params => <TextField {...params} label="freeSolo" />}
    />
  );
}

export default Search;
