import React from 'react';
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useDispatch } from 'react-redux';
import { resetQuery, selectQuery } from '../../../feature/currentQuerySlice.js';

function SelectMovies({
  countriesList,
  genresList,
  countries,
  order,
  year,
  genreId,
}) {
  const dispatch = useDispatch();

  const ordersList = [
    { title: 'By rating', value: 'RATING' },
    { title: 'By tag', value: 'NUM_VOTE' },
  ];

  const yearsList = new Array(60).fill(null).map((_, index) => ({
    title: new Date().getFullYear() - index,
    value: new Date().getFullYear() - index,
  }));

  return (
    <Stack
      sx={{
        flexDirection: {
          sm: 'column',
          md: 'row',
          marginBottom: '30px',
          gap: 10,
        },
      }}
    >
      <FormControl fullWidth size="small">
        <InputLabel>Sorting</InputLabel>
        <Select
          value={order}
          onChange={e => dispatch(selectQuery({ order: e.target.value }))}
          label="Order"
        >
          {ordersList.map(order => (
            <MenuItem key={order.value} value={order.value}>
              {order.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel>Country</InputLabel>
        <Select
          value={countries}
          onChange={e => dispatch(selectQuery({ countries: e.target.value }))}
          label="Countries"
        >
          {countriesList.map(country => (
            <MenuItem key={country.id} value={country.id}>
              {country.country}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel>Genre</InputLabel>
        <Select
          label="Genres"
          value={genreId}
          onChange={e => dispatch(selectQuery({ genreId: e.target.value }))}
        >
          {genresList.map(genre => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.genre}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl fullWidth size="small">
        <InputLabel>Year</InputLabel>
        <Select
          label="Year"
          value={year}
          onChange={e => dispatch(selectQuery({ year: e.target.value }))}
        >
          {yearsList.map(year => (
            <MenuItem key={year.value} value={year.value}>
              {year.title}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box>
        <Button onClick={() => dispatch(resetQuery())} variant="outlined" color="#000000" startIcon={<CloseIcon /> }>
          Delete
        </Button>
      </Box>
    </Stack>
  );
}

export default SelectMovies;
