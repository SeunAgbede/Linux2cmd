import React from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {

    const [checked, setChecked] = React.useState(true);
  
    return (
        <Context.Provider value={{ checked, setChecked }}>
            {children}
        </Context.Provider>
    );
    
};
