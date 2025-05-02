import React from 'react';
import useMoviesQuery from '../../../hooks/useMoviesQuery.jsx';
import { Box, Stack, Typography,Link } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';
import BearCarousel, { BearSlideImage } from 'bear-react-carousel';
import {Link as RouterLink} from 'react-router-dom';

export default function Movies() {
  const {
    isLoading,
    hasError,
    responsePopular,
    responseFilms,
    responseSerials,
    responseCartoons,
    responseBest,
  } = useMoviesQuery();

  // TODO add skeleton
  if (isLoading)
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'left',
          marginTop: '1.5rem',
        }}
      >
        <Typography>Loading...</Typography>
        <CircularProgress color="black" />
      </Box>
    );

  // TODO add error component
  if (hasError) return <p>Error message</p>;

  const serializeDataForCarousel = data =>
    data.map(row => (
      <BearSlideImage key={row.id} imageUrl={row.posterUrlPreview} />
    ));

  const carouselArr = [
    {
      title: 'Popular Films',
      url: '/popular',
      data: serializeDataForCarousel(responsePopular.data.items),
    },
    {
      title: 'The Best Films',
      url: '/best',
      data: serializeDataForCarousel(responseBest.data.items),
    },
    {
      title: 'Films',
      url: '/films',
      data: serializeDataForCarousel(responseFilms.data.items),
    },
    {
      title: 'Serials ',
      url: '/serials',
      data: serializeDataForCarousel(responseSerials.data.items),
    },
    {
      title: 'Cartoons ',
      url: '/cartoons',
      data: serializeDataForCarousel(responseCartoons.data.items),
    },
  ];

  return (
    <>
      {carouselArr.map(carousel => (
        <Stack  key={carousel.title}>
          <Link sx={{mt:2,mb:2}} variant="h4" component={<RouterLink/>} to={carousel.url}>{carousel.title}</Link>
          <BearCarousel
            data={carousel.data}
            slidesPerView={1}
            slidesPerGroup={1}
            isEnableNavButton
            isEnableAutoPlay
            autoPlayTime={3000}
            isEnableLoop
            breakpoints={{
              375:{
                autoPlayTime:0,
              },
              768:{
                slidesPerView:5,
              },
            }}
          />
        </Stack>
      ))}

    </>
  );
}
