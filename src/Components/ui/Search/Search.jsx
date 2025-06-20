import { Autocomplete, CircularProgress, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { setSearchQuery } from '../../../features/searchQuerySlice';
import { useGetFilmsQuery } from '../../../services/kinopoiskApi';
import styles from './search.module.css';

const movieTypes = {
  FILM: 'Фильм',
  TV_SERIES: 'Сериал',
  TV_SHOW: 'ТВ-Шоу',
  MINI_SERIES: 'Мини-сериал',
};

export default function Search() {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { countries, genreId, order, type, year, page, keyword } = useSelector(
    state => state.searchQuerySlice,
  );

  useEffect(() => {
    const setTimeoutId = setTimeout(() => {
      dispatch(setSearchQuery({ keyword: input }));
    }, 500);

    return () => clearTimeout(setTimeoutId);
  }, [input]);

  const { data, isFetching } = useGetFilmsQuery({
    countries,
    genreId,
    order,
    type,
    year,
    page,
    keyword,
  });

  return (
    <Autocomplete
      freeSolo
      className={styles.search}
      sx={{
        width: 300,
        backgroundColor: '#AAF1FF',
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            border: 'none',
          },
        },
      }}
      getOptionLabel={option =>
        `${option.nameRu} - ${movieTypes[option.type]} - ${option.year}`
      }
      options={data ? data.items : []}
      onInputChange={(_, value) => {
        setInput(value);
      }}
      onChange={(_, value) => {
        navigate(`/movie/${value.kinopoiskId}`);
      }}
      renderInput={params => (
        <TextField

          {...params}
          color="#FFFFFA"
          label="Поиск"
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {isFetching ? (
                  <CircularProgress size={20} color="black" />
                ) : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}
