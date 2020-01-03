import React, {createContext, useState} from 'react'

export const ContextSVG = createContext();

export const SVGProvider = (props) => {
    // const [path, setsvg] = useState([
    //     {
    //         name: "../icons/github.svg",
    //         id: 1
    //     },
    //     {
    //         name: "../icons/github.svg",
    //         id: 2
    //     },
    //     {
    //         name: "../icons/github.svg",
    //         id: 3
    //     }
    // ]);
    return (
        <ContextSVG.Provider value={"/icons/github.svg"}>
            {props.children}
        </ContextSVG.Provider>
    );
}
