'use client'

import React, { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {

    const [navMenu, setNavMenu] = useState(true);
    const [secondSecOP, setSecondSecOP] = useState(0);
    const [signUpType, setSignUpType] = useState(0);
    const [logIn, setLogIn] = useState(false);
    const [error, setError] = useState(false);


    return (

        <StateContext.Provider value={{
            
            navMenu,
            setNavMenu,
            secondSecOP,
            setSecondSecOP,
            signUpType,
            setSignUpType,
            logIn,
            setLogIn,
            error,
            setError,
             }}>

            {children}

        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext);