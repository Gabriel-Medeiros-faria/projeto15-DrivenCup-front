import video from "../assets/video.mp4"
import { useContext } from "react"
import { AuthContext } from "../Context/Auth"
import styled from "styled-components"
import { useNavigate } from "react-router"

export default function LastPage(){
    const {name} = useContext(AuthContext)
    const navigate = useNavigate()

    function Back(){
        navigate("/Home")
    }
    return (
        <>
            <ContainerThanksPage>
                <div className="videoContainer">
                    <video autoPlay muted loop>
                        <source src={video} type="video/mp4"></source>
                    </video>
                    <div className="Thanks">
                        <div className="text">
                            <p>{name}, Obrigado por comprar na Driven Cup</p>
                        </div>
                        <div className="time">
                            <p>Seu produto chegará em 10 dias úteis</p>
                        </div>
                    </div>
                </div>
                <button className="continue" onClick={()=> Back()}>Comprar mais</button>
            </ContainerThanksPage>
        </>
    )
}

const ContainerThanksPage = styled.div`
width: 100%;
height: 100%;
video{
    width: 100%;
    height: 100%;
}

.videoContainer{
    position: relative;
}
.Thanks{
    position: absolute;
    top: 200px;
    right: 650px;
    width: 500px;
    height: 500px;
    border-radius: 0px 100px;
    box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
    @media (max-width:600px){
        position: absolute;
        right: 30px;
        top: 90px;
        box-shadow: 2px 2px 10px -1px rgba(0, 0, 0, 0.5);
}
    .text{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 50px;
        font-family: 'Barlow Condensed';
        height: 400px;
        background-color: white;
        border-radius: 0px 100px 0px 0px;
        color: #620e5d;
    }
    .time{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 30px;
        font-family: 'Barlow Condensed';
        background-color: white;
        height: 100px;
        border-radius: 0px 0px 0px 100px;
        background-color: #620e5d;;
        padding-left: 40px;
        color: white;
    }
}
.continue {
    background: rgb(47,19,53);
    background: linear-gradient(90deg, rgba(47,19,53,1) 0%, rgba(98,14,93,1) 37%, rgba(157,0,122,1) 100%);
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
    position: fixed;
    z-index: 100;
    bottom: 150px;
    right: 800px;
}
`