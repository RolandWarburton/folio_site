import React, {useContext, createContext, useState} from 'react'

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setmovies] = useState([
        {
            name: "harry potter",
            id: 1
        },
        {
            name: "game of thrones",
            id: 2
        },
        {
            name: "inception",
            id: 3
        }
    ]);
    return (
        <MovieContext.Provider value={[movies, setmovies]}>
            {props.children}
        </MovieContext.Provider>
    );
}
