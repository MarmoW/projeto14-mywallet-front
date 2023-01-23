import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"



export default function MainPage({setAuthtoken, setUserName}){
    let email = ""
    let password = ""
    const navigate = useNavigate()

    function guardarSenha(event) {
        password = event.target.value
    }
    function guardarEmail(event) {
        email = event.target.value
    }
    function Conectar() {
        let Envio = {email, password}
        const request = axios.post(`${process.env.REACT_APP_API_URL}/`, Envio)
            .then(res => Redirect(res))
            .catch(err => console.log(err))
            
    }
    function Redirect(res) {
        setAuthtoken(res.data.authtoken)
        setUserName(res.data.user)
        console.log(res.data)
        navigate("/home")
    }
    function RedirectCadastro(){navigate("/cadastro")}

    return (
    <Main>
        <Logo>MyWallet</Logo>
        <Input type="text" placeholder="E-mail" onChange={guardarEmail}/>
        <Input type="password" placeholder="Senha" onChange={guardarSenha}/>
        <Botao onClick={Conectar}>Entrar</Botao>
        <Cadastrar onClick={RedirectCadastro}><span>Primeira vez? Cadastre-se!</span></Cadastrar>
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
padding-top: 156px;
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
const Logo = styled.p`
display: flex;
justify-content: center;
font-size: 32px;
font-weight: 400;
color: #ffffff;
font-family: 'Saira Stencil One', cursive;
margin-bottom: 24px;
`
const Cadastrar = styled.div`
display: flex;
margin-right: 57px;
margin-left: 57px;
font-family: 'Raleway', sans-serif;
font-size: 15px;
color: #ffffff;
font-weight: bold;
margin-top: 30px;
`