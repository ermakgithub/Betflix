import React from 'react'
import{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import MovieDetail from "./Pages/MoviesDetail/MovieDetail.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import ActorDetail from "./Pages/ActorDetail/ActorDetail.jsx";
import {MOVIE_LISTS, TOP_LISTS} from "../constant.js";
import MoviesListMain from "./Pages/MoviesListMain/MoviesListMain.jsx";
import MoviesListTop from "./Pages/MoviesListTop/MoviesListTop.jsx";

function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {
                    path: "/",
                    element: <Movies/>
                },
                ...TOP_LISTS.map(el =>({
                    path: el.url,
                    element: <MoviesListTop/>
                })),
                ...MOVIE_LISTS.map(el =>({
                    path: el.url,
                    element: <MoviesListMain/>
                })),
                {
                    path: "/movie/:id",
                    element: <MovieDetail/>
                },
                {
                    path: "/actor/:id",
                    element: <ActorDetail/>
                },
            ]
        },


    ]);


  return <RouterProvider router={router}/>;

}

export default App
