import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router"
import styled from "styled-components"

export default function SignUp() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmThePassword, setConfirmThePassword] = useState("")
    const [name, setName] = useState("")
    const navigate = useNavigate()

    function ConfirmPurchase(e) {
        e.preventDefault()
        if(name && email && password && confirmThePassword && password === confirmThePassword){
            const body = {
                name,
                email,
                password,
                confirmedPassword: confirmThePassword
            }
            const promisse = axios.post(`https://drivencup.onrender.com/users`, body)
            promisse.then((resp)=>console.log(resp))
            promisse.catch((err)=>console.log(err))
            navigate("/")
        }
    }

    return (
        <>
            <SignUpContainer>
                <SignInBox>
                    <Name>
                        Driven Cup
                    </Name>
                    <Inputs>
                        <form onSubmit={ConfirmPurchase}>
                            <input placeholder="Nome" required onChange={(e) => setName(e.target.value)}></input>
                            <input placeholder="E-mail" type={"email"} required onChange={(e) => setEmail(e.target.value)}></input>
                            <input placeholder="Senha" type={"password"} required onChange={(e) => setPassword(e.target.value)}></input>
                            <input placeholder="Confirmar senha" type={"password"} required onChange={(e) => setConfirmThePassword(e.target.value)}></input>
                            <button className="continue">Cadastrar</button>
                        </form>
                    </Inputs>
                    <GoSignup>
                        <p onClick={() => navigate("/")}>Já tem uma conta? Entre</p>
                    </GoSignup>
                </SignInBox>
            </SignUpContainer>
        </>
    )
}

const SignUpContainer = styled.div`
background-color: #77181e;
width: 100%;
height: 953px;
display: flex;
align-items: center;
justify-content: center;
font-family: 'Barlow Condensed';
`

const SignInBox = styled.div`
background-color: white;
width: 50%;
height: 70%;
border-radius: 10px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

const Name = styled.div`
font-size: 70px;
margin-bottom: 40px;
`

const Inputs = styled.div`
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        input{
            padding: 5px;
            font-size: 35px;
            border-width: 0px;
            border-color: #77181e;
            background-color: #FFFFFF;
            color: #000000;
            border-style: solid;
            border-radius: 9px;
            box-shadow: 0px 0px 3px rgba(66,66,66,.75);
            text-shadow: 0px 0px 5px rgba(66,66,66,.0);
            margin-bottom: 10px;
            font-family: 'Barlow Condensed';
            }
        .css-input:focus {
            outline:none;
        }
        .continue{
            background:    #77181e;
            border-radius: 11px;
            padding:       10px 30px;
            color:         #ffffff;
            display:       inline-block;
            font:          normal bold 26px/1 "Open Sans", sans-serif;
            text-align:    center;
            margin-bottom: 10px;
        }
        .continue:hover{
            cursor: pointer;
        }
}
`

const GoSignup = styled.div`
text-decoration: underline;
font-size: 18px;

:hover{
    cursor: pointer;
}
`