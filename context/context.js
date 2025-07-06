"use client"
import React from 'react';
import { createContext, useState } from 'react';

const counterContext = createContext();

const userContext = ({ children }) => {
    const [usernameGlobal, setUsernameGlobal] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <counterContext.Provider value={{ usernameGlobal, setUsernameGlobal, isLoggedIn, setIsLoggedIn }}>
            {children}
        </counterContext.Provider>
    )
}

export default userContext;
export { counterContext };
