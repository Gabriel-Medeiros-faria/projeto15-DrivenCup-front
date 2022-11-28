import React, {createContext, useEffect, useState} from "react";

export const AuthContext = createContext({})

function AuthProvider({children}){
    const [token, setToken] = useState("")
    console.log(token)
    const [openCart, setOpenCart] = useState(false)
    const [qtd, setQtd] = useState(1)
    const [arrCart, setArrCart] = useState([])
    const [payment, setPayment] = useState("")
    const [idCart, setIdCart] = useState("")
    const [name, setName] = useState("")
    return(
        <AuthContext.Provider value={{token, 
        setToken, 
        openCart, 
        setOpenCart, 
        qtd, 
        setQtd, 
        arrCart, 
        setArrCart, 
        payment, 
        setPayment,
        idCart,
        setIdCart,
        setName,
        name}}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider