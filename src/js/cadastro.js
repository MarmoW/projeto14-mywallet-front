import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"


export default function Cadastro(){
    let name = ""
    let email = ""
    let pass = ""
    let confirm = ""
    const navigate = useNavigate();
    
    function SaveName(event){ name = event.target.value}
    function SaveEmail(event){ email = event.target.value}
    function SavePass(event){ pass = event.target.value}
    function ConfirmPass(event){ confirm = event.target.value}

    function Enviar(){
        let Envio = {user: name, email: email, password: pass, confirmPassword: confirm}
        const request = axios.post("http://localhost:5000/cadastro", Envio)
            .then(res => Redirect(res))
            .catch(err => console.log(err))
    }

    function Redirect(res) {
        navigate("/")
    }
    return (
    <Main>
        <Logo>MyWallet</Logo>
        <Input type="text" placeholder="Nome" onChange={SaveName}/>
        <Input type="email" placeholder="E-mail" onChange={SaveEmail}/>
        <Input type="password" placeholder="Senha" onChange={SavePass}/>
        <Input type="password" placeholder="Confirme a Senha" onChange={ConfirmPass}/>
        <Botao onClick={Enviar}>Cadastrar</Botao>
        <EntreAgora><span>Já tem uma conta? Entre agora!</span></EntreAgora>
    </Main>
    )
}


const Main = styled.div `
display: flex;
background-color: #8C11BE;
min-width: 100%;
min-height: 100%;
height: 800px;
flex-direction: column;
font-family: 'Raleway', sans-serif;
box-sizing: border-box;
padding-top: 95px;
padding-left: 25px;
padding-right: 24px;
`
const Input = styled.input`
display: flex;
width: 326px;
height: 58px;
border-radius: 5px;
margin-bottom: 13px;
font-family: 'Raleway', sans-serif;
padding-left: 20px;
box-sizing: border-box;
font-size: 20px;
font-weight: 400;
`
const Logo = styled.p`
display: flex;
justify-content: center;
font-size: 32px;
font-weight: 400;
color: #ffffff;
font-family: 'Saira Stencil One', cursive;
margin-bottom: 24px;
`
const Botao = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 326px;
height: 58px;
border-radius: 5px;
margin-bottom: 13px;
background-color: #A328D6;
color: #ffffff;
font-size: 20px;
font-weight: bold;
border: 0px;
font-family: 'Raleway', sans-serif;
`
const EntreAgora = styled.div`
display: flex;
margin-right: 27px;
margin-left: 40px;
font-family: 'Raleway', sans-serif;
font-size: 15px;
color: #ffffff;
font-weight: bold;
margin-top: 30px;
`