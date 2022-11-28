import styled from "styled-components"
import Header from "../Header/Header"
import axios from "axios"
import { useContext, useState } from "react"
import { AuthContext } from "../Context/Auth"
import { useNavigate } from "react-router"
export default function CheckoutPage(){
    
    const {idCart, payment , token, setName, name} = useContext(AuthContext)
    const [email, setEmail] = useState("")
    const [products, setProducts] = useState([])
    const navigate = useNavigate()
    let total = 0
    let newTotal = products.map((obj)=> total+= obj.price * obj.amount)

    function ItemsCheckout(){
        const config = {
            headers: { "Authorization": `Bearer ${token}`  }
        }
        const body = {
            payment: payment,
            cartId:idCart
        }
        const promisse = axios.post("http://localhost:5000/purchases",body, config)
        promisse.then((resp)=> {
            console.log(resp)
            setName(resp.data.name)
            setEmail(resp.data.email)
            setProducts(resp.data.products)
        })
        promisse.catch((err)=> console.log(err))
    }
    ItemsCheckout()

    function Finishing(){
        const config = {
            headers: { "Authorization": `Bearer ${token}`  }
        }
        const body = {
            cartId:idCart
        }
        const promisse = axios.post("http://localhost:5000/carts", body, config)
        promisse.then((resp)=>console.log(resp))
        promisse.catch((err)=>console.log(err))
        navigate("/ThanksPage")
    }

    return(
        <>
            <Header/>
            <CheckoutPageContainer>
                <div className="items">
                    {products.map((obj)=>
                        <div className="item">
                            <img src={obj.image}/>
                            <div>
                                <p>{obj.name}</p>
                                <p>{obj.description}</p>
                                <p>R${obj.price * obj.amount},00</p>
                                <p className="qtd">Quantidade: {obj.amount}</p>
                            </div>
                        </div>
                    )}
                    </div>
                    <div className="infoUser">
                        <div>
                        <p>{name}</p>
                        <p>{email}</p>
                        </div>
                        <div className="total">
                            <p>Total: R$ {total}</p>
                        </div>
                    </div>
                    <div className="buttons">
                        <button className="Finalizar" onClick={()=>Finishing()}>Confirmar Pedido</button>
                    </div>
                </CheckoutPageContainer>
        </>
    )
}

const CheckoutPageContainer = styled.div`
margin-top: 150px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
p{
    font-size: 30px;
        margin-bottom: 20px;
        margin-top: 20px;
        font-family: 'Barlow Condensed';

}
.items{
    width: 70%;
}
.item{
    display: flex;
    margin-bottom: 20px;
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 100%;
    img{
        width: 200px;
        border-radius: 10px;
    }
    div{
        margin-left: 10px;
    }
    .qtd{
        margin-top: 80px;
    }
}
.Finalizar {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(119,24,30);
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'Barlow Condensed';
	font-size:20px;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    margin-top: 30px;
}
.Finalizar:hover {
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
}
.Finalizar:active {
	position:relative;
	top:1px;
}
.buttons{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
}
.infoUser{
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
    width: 400px;
    border-radius: 10px;
    .total{
        margin-left: 50px;
    }
}
`