import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router"
import styled from "styled-components"
import { AuthContext } from "../Context/Auth"
import Header from "../Header/Header"
import OpenCart from "../Cart/OpenCart"

export default function ProductPage() {
    const [description, setDescription] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState()
    const [name, setName] = useState("")
    const { id } = useParams()
    const { token, openCart, qtd, setQtd, arrCart} = useContext(AuthContext)
    console.log(arrCart)
    
    useEffect(() => {
        const config = {
            headers: { "Authorization": `Bearer ${token}` }
        }
        const promisse = axios.get(`https://drivencup.onrender.com/products/${id}`, config)
        promisse.then((resp) => {
            console.log(resp)
            setDescription(resp.data.description)
            setImg(resp.data.image)
            setPrice(resp.data.price)
            setName(resp.data.name)
        })
        promisse.catch((err) => console.log(err))
    }, [])

    function AddCart(){
            const config = {
                headers: { "Authorization": `Bearer ${token}` }
            }
            const body = {
                productId: id,
                amount: qtd
            }
            const promisse = axios.put("https://drivencup.onrender.com/carts", body, config)
            promisse.then((resp)=>{
                console.log(resp)
            })
            promisse.catch((err)=>{
                console.log(err)
            })
    }
    
    function SubQtd(){
        if(qtd < 2){
            return
        }
        const config = {
            headers: { "Authorization": `Bearer ${token}` }
        }
        const body = {
            productId: id,
            amount: qtd
        }
        const promisse = axios.put("https://drivencup.onrender.com/carts", body, config)
        promisse.then((resp)=>{
            console.log(resp)
        })
        promisse.catch((err)=>{
            console.log(err)
        })
        setQtd(qtd - 1)
    }


    return (
        <>
            {openCart ? <OpenCart /> : ""}
            <Header />
            <ProductPageContainer>
                <ProductBox>
                    <div className="img">
                        <img src={img} />
                    </div>
                    <div className="caracterProduct">
                        <p className="Name">{name}</p>
                        <p className="Caracter">{description}</p>
                        <p className="price"> R${price},00 </p>
                    </div>
                    <div className="finaly">
                        <div className="buttons">
                            <button className="sub" onClick={()=>SubQtd()}>-</button>
                            <p>{qtd}</p>
                            <button className="somar" onClick={()=>setQtd(qtd+1)}>+</button>
                        </div>
                        <button className="addCart" onClick={()=>AddCart()}>Colocar no carrinho</button>
                        {/* <p className="sucess">produto adicionado no carrinho</p> */}
                        <div className="back">Voltar</div>
                    </div>
                </ProductBox>
            </ProductPageContainer>
        </>
    )
}

const ProductPageContainer = styled.div`
margin-top: 250px;
display: flex;
justify-content: center;
align-items: center;
`

const ProductBox = styled.div`
box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
width: 700px;
height: 388px;
display: flex;
font-family: 'Barlow Condensed';
position: relative;
img{
    width: 300px;
    height: 388px;
}
.caracterProduct{
    margin-left: 20px;
}
.Name{
    font-size: 40px;
    font-weight:500;
    margin-bottom: 20px;
}
.Caracter{
    font-size: 30px;
}
.price{
    font-size: 30px;
    position: absolute;
    bottom: 20px;
}
.finaly{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    margin-top: 270px;
    width: 300px;
    .addCart {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(119,24,30);
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'Barlow Condensed';
	font-size:20px;
    height: 45px;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
}
.addCart:hover {
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
}
.addCart:active {
	position:relative;
	top:1px;
}
.buttons{
    display: flex;
    position: absolute;
    top: -30px;
    right: 17px;
    p{
        font-size: 25px;
        margin-left: 5px;
        margin-right: 5px;
    }
}
.somar {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(119,24,30);
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'Barlow Condensed';
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    height: 25px;
    font-size: 20px;
    width: 30px;
}
.somar:hover {
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
}
.somar:active {
	position:relative;
	top:1px;
}
.sub {
	box-shadow: 0px 10px 14px -7px #276873;
    background: rgb(119,24,30);
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
    font-family: 'Barlow Condensed';
	font-size:20px;
	font-weight:bold;
	text-decoration:none;
	text-shadow:0px 1px 0px #3d768a;
    height: 25px;
    font-size: 20px;
    width: 30px;
}
.sub:hover {
    background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
	border-radius:8px;
}
.sub:active {
	position:relative;
	top:1px;
}
.back{
    font-family: 'Barlow Condensed';
    margin-top: 10px;
    margin-bottom: 20px;
    font-size: 20px;
}
.back:hover{
    cursor: pointer;
}
.sucess{
        font-size: 15px;
        margin-top: 5px;
    }
}
`