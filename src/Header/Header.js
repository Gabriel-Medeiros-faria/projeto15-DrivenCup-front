import { useNavigate } from "react-router"
import styled from "styled-components"
import Cart from "../Cart/Cart"

export default function Header(){
    const navigate = useNavigate()
    
    return(
        <>
            <HeaderContainer>
                <div className="Name" onClick={()=> navigate("/Home")}>
                    <p>Driven Cup</p>
                </div>
                <Cart/>
            </HeaderContainer>
        </>
    )
}

const HeaderContainer = styled.div`
width: 100%;
height: 110px;
background: rgb(119,24,30);
background: linear-gradient(90deg, rgba(119,24,30,1) 0%, rgba(101,0,7,1) 37%, rgba(82,0,5,1) 100%);
display: flex;
justify-content: space-between;
align-items: center;
position: fixed;
top: 0;
left: 0;
z-index: 10;

.Name{
    color: white;
    font-size: 80px;
    font-family: 'Barlow Condensed';
    margin-left: 30px;
}
.Name:hover{
    cursor: pointer;
}
`