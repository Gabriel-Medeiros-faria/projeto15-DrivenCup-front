import { useContext, useEffect, useState } from "react"
import { AuthContext } from "../Context/Auth"
import Header from "../Header/Header"
import OpenCart from "../Cart/OpenCart"
import styled from "styled-components"
import Product from "./Product"
import axios from "axios"

export default function Home() {
    const { openCart } = useContext(AuthContext)
    const { token } = useContext(AuthContext)
    const [name, setName] = useState("")
    const [img, setImg] = useState("")
    const [price, setPrice] = useState()
    const [products, setProducts] = useState([])
    console.log(token)

    const config = {
        headers: { "Authorization": `Bearer ${token}`  }
    }
    
    useEffect(()=> {
        const promisse = axios.get("https://drivencup.onrender.com/products", config)
        promisse.then((resp)=> {
            console.log(resp)
            setProducts(resp.data)
            setName(resp.data.name)
            setImg(resp.data.img)
            setPrice(resp.data.price)
        })
        promisse.catch((err)=>console.log(err))
    },[])

    return (
        <>
            {openCart ? <OpenCart /> : ""}
            <Header />
            <HomeContainer>
                <p>Produtos</p>
                <Products>
                    {products.map((obj)=>
                    <Product name={obj.name} img={obj.image} price={obj.price} id={obj._id}/>
                    )}
                    
                </Products>
            </HomeContainer>
        </>
    )
}

const HomeContainer = styled.div`
padding-top: 110px;
font-size: 45px;
font-family: 'Barlow Condensed';
p{
    margin-top: 30px;
    margin-left: 56px;
    margin-bottom: 30px;
}
`

const Products = styled.div`
display: flex;
margin-left: 30px;
flex-wrap: wrap;
`