import styled from "styled-components"
import { useContext } from "react"
import { AuthContext } from "../Context/Auth"

export default function Cart(){
    const {setOpenCart} = useContext(AuthContext)

    return(
        <>
            <CartContainer>
                <div className="CartIcon">
                <ion-icon name="cart-outline" onClick={()=> setOpenCart(true)}></ion-icon>
                </div>
            </CartContainer>
        </>
    )
}

const CartContainer = styled.div`
color: white;
font-size: 40px;
margin-right: 30px;
:hover{
    cursor: pointer;
}
`