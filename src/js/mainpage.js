import React from "react"
import styled from "styled-components"


export default function MainPage(){
    return (
    <Main>
        <Logo>MyWallet</Logo>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha"/>
        <Botao>Entrar</Botao>
        <Cadastrar><span>Primeira vez? Cadastre-se!</span></Cadastrar>
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