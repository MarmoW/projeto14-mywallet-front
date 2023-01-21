import React from "react"
import styled from "styled-components"

export default function Cadastro(){
    return (
    <Main>
        <Logo>MyWallet</Logo>
        <Input placeholder="Nome"/>
        <Input placeholder="E-mail"/>
        <Input placeholder="Senha"/>
        <Input placeholder="Confirme a Senha"/>
        <Botao>Cadastrar</Botao>
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