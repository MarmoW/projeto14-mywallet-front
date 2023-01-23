import React from "react"
import styled from "styled-components"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function NovaEntrada({authtoken}){
    let valor = 0
    let descricao = ""
    const navigate = useNavigate();
    const config = {headers:{authtoken: authtoken}}

    function guardarValores(event) {
        valor = (Math.round(event.target.value * 100) / 100).toFixed(2);//event.target.value
    }
    function guardarDescricao(event) {
        descricao = event.target.value
    }
    

    function Enviar(){
        if(valor === 0) {return console.log("Valor não pode ser 0")}
        if(descricao === ""){return console.log("Descrição não pode ficar em branco")}
        let Envio = {value: valor, description: descricao}
        const config = {headers:{authtoken: authtoken}}
        const request = axios.post(`${process.env.REACT_APP_API_URL}/nova-entrada`, Envio ,config)
            .then(console.log("Enviado com sucesso"))
            .catch(err => console.log(err))
            navigate("/home")
    }

    return (
    <Main>
        <PageTitle>Nova entrada</PageTitle>
        <Input type="number" placeholder="Valor" onChange={guardarValores}/>
        <Input type="text" placeholder="Descrição" onChange={guardarDescricao}/>
        <Botao onClick={Enviar}>Salvar entrada</Botao>
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