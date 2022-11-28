import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/Auth"
import ProductCart from "./ProductCart"
import axios from "axios"
import { useNavigate } from "react-router"

export default function OpenCart() {
    const { setOpenCart, token } = useContext(AuthContext)
    const [arrCart, setArrCart] = useState([])
    const navigate = useNavigate()
    const {payment, setPayment, setIdCart} = useContext(AuthContext)
    console.log(token)

    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${token}` }
        }
        const promisse = axios.get("http://localhost:5000/carts", config)
        promisse.then((resp) => {
            console.log(resp)
            setArrCart(resp.data.products)
            setIdCart(resp.data._id)
        })
        promisse.catch((err) => console.log(err))
    }, [arrCart])

    function FinalizeOrder() {
        if(payment !== ""){
            navigate("/Checkout")
        }
        else{
            alert("Escolha um método de pagamento")
        }
        
    }

    return (
        <>
            <OpenCartContainer>
                {arrCart.length !== 0 ?
                    <>
                        {arrCart.map((obj) =>
                            <ProductCart img={obj.image} price={obj.price} amount={obj.amount} name={obj.name} id={obj.productId} />)}</>
                    :
                    <p className="none">Nenhum produto no carrinho</p>}
                <div className="buttons">
                    {arrCart.length !== 0 ?
                        <>
                            <div className="paymentMethod">
                                <button className={payment === "Money"? "Money green":"Money"} onClick={()=> setPayment("Money")}>Dinheiro</button>
                                <button className={payment === "Card"? "Card green":"Card"} onClick={()=> setPayment("Card")}>Cartão</button>
                            </div>
                            <button className="Finalizar" onClick={() => FinalizeOrder()}>Finalizar pedido</button>
                            <p className="back" onClick={(() => setOpenCart(false))}>Continuar comprando</p></> : <p className="back" onClick={(() => setOpenCart(false))}>Continuar comprando</p>}
                </div>
            </OpenCartContainer>
        </>
    )
}

const OpenCartContainer = styled.div`
width: 60%;
height: 100%;
background-color: white;
box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
border-radius: 10px;
position: fixed;
z-index: 1;
right: 0;
top: 0;
display: flex;
flex-direction: column;
align-items: center;
overflow-y: scroll;
.buttons{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 20px;
    .back{
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 25px;
    text-decoration: underline;
    font-family: 'Barlow Condensed';
    }
    .back:hover{
        cursor: pointer;
    }
    .Finalizar {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(119,24,30);
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:30px;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    margin-top: 30px;
    font-family: 'Barlow Condensed';
}
.Finalizar:hover {
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
}
.Finalizar:active {
	position:relative;
	top:1px;
}
.paymentMethod{
    display: flex;
    justify-content: space-between;
    width: 250px;
    .Money{
    font-family: 'Barlow Condensed';
    width: 120px;
    height: 50px;
    font-size: 30px;
    background-color: white;
    border: none;
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    :hover{
        cursor: pointer;
    }
    }
    .Card{
        font-family: 'Barlow Condensed';
        width: 120px;
        height: 50px;
        font-size: 30px;
        background-color: white;
        border: none;
        box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
        border-radius: 5px;
        :hover{
        cursor: pointer;
        }
    }
    .green{
        background-color: green;
    }
}
}

.none{
    font-size: 40px;
    margin-top: 30px;
}
`