import React from 'react'
import{
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import MovieDetail from "./Pages/MoviesDetail/MovieDetail.jsx";
import Movies from "./Pages/Movies/Movies.jsx";
import ActorDetail from "./Pages/ActorDetail/ActorDetail.jsx";


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
