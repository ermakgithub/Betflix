import {
  AutoAwesome,
  StarPurple500,
  Bloodtype,
  MenuBook,
  FamilyRestroom,
  VolunteerActivism,
  MoodBad,
  Pool,
  LiveTv,
  LocalMovies,
  Reorder,
  Fort,
} from '@mui/icons-material';

export const iconComponents = {
  AutoAwesome,
  StarPurple500,
  Bloodtype,
  MenuBook,
  FamilyRestroom,
  VolunteerActivism,
  MoodBad,
  Pool,
  LiveTv,
  LocalMovies,
  Reorder,
  Fort,
};

export const TOP_LISTS = [
  {
    title: 'TOP 100 The best movies',
    icon: 'AutoAwesome',
    url: '/popular',
    value: 'TOP_POPULAR_MOVIES',
  },
  {
    title: 'TOP 250 The best movies',
    icon: 'StarPurple500',
    url: '/best',
    value: 'TOP_250_MOVIES',
  },
  {
    title: 'Vampires',
    icon: 'Bloodtype',
    url: '/vampire',
    value: 'VAMPIRE_THEME',
  },
  {
    title: 'Comics',
    icon: 'MenuBook',
    url: '/comics',
    value: 'COMICS_THEME',
  },
  {
    title: 'Family',
    icon: 'FamilyRestroom',
    url: '/family',
    value: 'FAMILY',
  },
  {
    title: 'Romance',
    icon: 'VolunteerActivism',
    url: '/romantic',
    value: 'LOVE_THEME',
  },
  {
    title: 'Zombie',
    icon: 'MoodBad',
    url: '/zombie',
    value: 'ZOMBIE_THEME',
  },
  {
    title: 'Disasters',
    icon: 'Pool',
    url: '/catastrophe',
    value: 'CATASTROPHE_THEME',
  },
  {
    title: 'Best Serials',
    icon: 'LiveTv',
    url: '/popular-serials',
    value: 'POPULAR_SERIES',
  },
];

export const MOVIE_LISTS = [
  {
    title: 'Movies',
    icon: 'LocalMovies',
    url: '/films',
    value:'FILM'
  },
  {
    title: 'Serials',
    icon: 'Reorder',
    url: '/serials',
    value:'TV_SERIES'
  },
  {
    title: 'Cartoons',
    icon: 'Fort',
    url: '/cartoons',
    value:'FILM'
  },
];
