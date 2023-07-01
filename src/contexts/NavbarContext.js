import React from "react"



export const NavbarContextDefaults = {

    value: false,
    setValue: () => { }
}


export const NavbarContext = React.createContext(NavbarContextDefaults)