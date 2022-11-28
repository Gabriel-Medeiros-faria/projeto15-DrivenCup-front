import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../Context/Auth"

export default function ProductCart(props){
    const {name, amount, price, img, id} = props
    const {token} = useContext(AuthContext)
    
    function DeleteItem(){
        const headers = { "Authorization": `Bearer ${token}`}
        const data = { productId: id}        

        const promisse = axios.delete("http://localhost:5000/carts", { headers, data })
        promisse.then((resp)=>console.log(resp))
        promisse.catch((err)=>console.log(err))
    }
    return(
        <>
            <ProductCartContainer>
                <div className="img">
                    <img src={img}/>
                </div>
                <div className="textsProduct">
                    <p className="caracterProduct">{name} | {amount} unidade(s)</p>
                    <p>R${price * amount},00</p>
                    <ion-icon name="trash-outline" className="trash" onClick={()=>DeleteItem()}></ion-icon>
                </div>

            </ProductCartContainer>
        </>
    )
}

const ProductCartContainer = styled.div`
box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
background-color: white;
width: 700px;
height: 200px;
margin-top: 40px;
border-radius: 0px 0px 100px 0px;
display: flex;
align-items: center;
font-family: 'Barlow Condensed';
position: relative;
img{
    width: 150px;
    height: 200px;
}
.textsProduct{
    font-size: 30px;
    .caracterProduct{
        margin-bottom: 50px;
    }
}
ion-icon{
    position: absolute;
    right: 10px;
    top: 10px;
    :hover{
        cursor: pointer;
    }
}
`