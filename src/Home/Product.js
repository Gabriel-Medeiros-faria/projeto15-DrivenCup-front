import styled from "styled-components"
import { useNavigate } from "react-router-dom"
export default function Product(props){
    const {name, price, img, id} = props
    const navigate = useNavigate()
    

    function GoProductPage(){
        navigate(`/Product/${id}`)
    }

    return(
        <>
            <ProductContainer onClick={()=>GoProductPage()}>
                <div className="img">
                <img src={img}/>
                </div>
                <div className="caracterProduct">
                    <p className="name">{name}</p>
                    <p className="price">R${price},00</p>
                </div>
            </ProductContainer>
        </>
    )
}

const ProductContainer = styled.div`
width: 250px;
height: 350px;
box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
margin-left: 30px;
margin-bottom: 30px;
font-size: 25px;
position: relative;
:hover{
    cursor: pointer;
}
.img{
    display: flex;
    justify-content: center;
    img{
        width: 170px;
    }
}
.caracterProduct{
    margin-left: 30px;
    .name{
        flex-wrap: wrap;
        font-size: 25px;
        margin: 0px;
    }
    .price{
        margin: 0px;
        position: absolute;
        bottom: 10px;
    }
}
`