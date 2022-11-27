import styled from "styled-components"
import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/Auth"
import ProductCart from "./ProductCart"
import axios from "axios"

export default function OpenCart(){
    const {setOpenCart, token} = useContext(AuthContext)
    const [arrCart, setArrCart] = useState([])
    console.log(arrCart)
    
    useEffect(()=>{
        const config = {
            headers: { "Authorization": `Bearer ${token}`  }
        }
        const promisse = axios.get("http://localhost:5000/carts", config)
        promisse.then((resp)=>{
            console.log(resp)
            setArrCart(resp.data.products)
        })
        promisse.catch((err)=>console.log(err))
    },[])

    return(
        <>
            <OpenCartContainer>
                {arrCart.map((obj)=>
                <ProductCart img={obj.image} price={obj.price} amount={obj.amount} name={obj.name} id={obj.productId}/>)}
                <div className="buttons">
                    <button className="Finalizar">Finalizar pedido</button>
                    <p className="back" onClick={(() => setOpenCart(false))}>Continuar comprando</p>
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
}
`