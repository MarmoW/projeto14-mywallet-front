import React from "react"
import styled from "styled-components"

export default function NovaSaida(){
    return (
    <Main>
        <PageTitle>Nova saída</PageTitle>
        <Input placeholder="Valor"/>
        <Input placeholder="Descrição"/>
        <Botao>Salvar saída</Botao>
    </Main>
    )
}



const PageTitle = styled.div`
display: flex;
font-family: 'Raleway', sans-serif;
color: #ffffff;
font-size: 26px;
font-weight: bold;
margin-bottom: 40px;

`
const Main = styled.div `
display: flex;
background-color: #8C11BE;
min-width: 100%;
min-height: 100%;
height: 800px;
flex-direction: column;
font-family: 'Raleway', sans-serif;
box-sizing: border-box;
padding-top: 25px;
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