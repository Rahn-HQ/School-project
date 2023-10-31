'use client'

import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [navMenu, setNavMenu] = useState(true);
    const [secondSecOP, setSecondSecOP] = useState(0);


    return (

        <StateContext.Provider value={{
            
            navMenu,
            setNavMenu,
            secondSecOP,
            setSecondSecOP,
             }}>

            {children}

        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);