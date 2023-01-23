import {useState, useEffect} from "react"
import styled from "styled-components"
import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"


export default function Home({authtoken, user}){
    const [walletInfo, setWalletInfo] = React.useState(undefined)
    const navigate = useNavigate()
    const IonStyle = {fontSize: 30}
    let totalmovimentado = 0
    
    useEffect(() => {        
        const config = {headers:{authtoken: authtoken}}
        console.log(config)
		const request = axios.get(`${process.env.REACT_APP_API_URL}/home`, config)
		request.then(resposta => {  
		    setWalletInfo(resposta.data);
        });
	}, []);
    
    if(walletInfo === undefined){
        return (console.log("aqui", walletInfo))
    }

    if(walletInfo.length === 0){
        return (
        <Main>
            <PageTitle><span>Olá, {user}</span><ion-icon name="exit-outline" style={IonStyle}></ion-icon></PageTitle>
            <DivWallet2>
                <p>Não há registros de entrada ou saída.</p>
            </DivWallet2>
            <DivBotoes>
                <Botoes onClick={RedirectEntrada}><ion-icon name="add-circle-outline" style={IonStyle}></ion-icon><p>Nova entrada</p></Botoes>
                <Botoes onClick={RedirectSaida}><ion-icon name="remove-circle-outline" style={IonStyle}></ion-icon><div>Nova saída</div></Botoes>
            </DivBotoes>
        </Main>)
    }

    function RedirectEntrada() {navigate("/nova-entrada")}
    function RedirectSaida() {navigate("/nova-saida")}
    function FazerLogout() {window.location.href = "http://localhost:3000/"}

    totalmovimentado = walletInfo.reduce((Somatorio, walletInfo) => {
        return walletInfo.op === 'entry' ? Somatorio + parseFloat(walletInfo.value) : Somatorio - parseFloat(walletInfo.value)}, 0)
    totalmovimentado = (Math.round(totalmovimentado * 100) / 100).toFixed(2)
    console.log(totalmovimentado)
    
    return (
        <Main>
            <PageTitle><span>Olá, {user}</span><ion-icon name="exit-outline" style={IonStyle} onClick={FazerLogout}></ion-icon></PageTitle>
            <DivWallet>
                <DivItens>
                    {walletInfo.map(props => {
                        return(
                            <ItensWallet key={props.id_}>
                                <DataWallet >{props.data}</DataWallet>
                                <DivFormatar>
                                    <DescricaoWallet>{props.name}</DescricaoWallet>
                                    <ValorWallet cor={props.op}>{props.value}</ValorWallet>
                                </DivFormatar>
                            </ItensWallet>)
                    })}
                </DivItens>                
                <Saldo>
                    <PalavraSaldo>SALDO</PalavraSaldo>
                    <SaldoTotal color={totalmovimentado}>{totalmovimentado}</SaldoTotal>
                </Saldo>
            </DivWallet>
            <DivBotoes>
                <Botoes onClick={RedirectEntrada}><ion-icon name="add-circle-outline" style={IonStyle}></ion-icon><p>Nova entrada</p></Botoes>
                <Botoes onClick={RedirectSaida}><ion-icon name="remove-circle-outline" style={IonStyle}></ion-icon><div>Nova saída</div></Botoes>
            </DivBotoes>
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
justify-content: space-between;
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
const DivBotoes = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
`
const Botoes = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
font-weight: bold;
font-family: 'Raleway', sans-serif;
color: #ffffff;
background-color: #A328D6;
border-radius: 5px;
width: 155px;
height: 144px;
padding-bottom: 10px;
padding-left: 10px;
padding-top: 10px;
box-sizing: border-box;
`
const DivWallet = styled.div`
position: relative;
height: 446px;
width: 326px;
border-radius: 5px;
background-color: #ffffff;
margin-bottom: 14px;
padding-left: 12px;
box-sizing: border-box;
overflow: hidden;
overflow-y:scroll;
`
const ItensWallet = styled.div`
display: flex;
font-family: 'Raleway', sans-serif;
flex-direction: row;
margin-bottom: 10px;
font-size: 16px;
font-weight: regular;

`
const Saldo = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
position: absolute;
bottom: 10px;
left: 15px;
`
const PalavraSaldo = styled.div`
font-size: 17px;
font-weight: bold;
font-family: 'Raleway', sans-serif;
`
const SaldoTotal = styled.div`
font-size: 17px;
font-weight: bold;
font-family: 'Raleway', sans-serif;
padding-right: 25px;
color:${props => props.color < 0 ? "#C70000" : "#03AC00"};
`
const DataWallet = styled.p`
font-size: 16px;
font-weight: normal;
font-family: 'Raleway', sans-serif;
color: #C6C6C6;

`
const DescricaoWallet = styled.p`
display: flex;
margin-left: 8px;
font-size: 16px;
font-weight: normal;
font-family: 'Raleway', sans-serif;
color: #000000;
`
const ValorWallet = styled.p`
display: flex;
font-size: 16px;
font-weight: normal;
font-family: 'Raleway', sans-serif;
color: ${props => 
    {if(props.cor === "entry"){return "#03AC00"}
    else{return "#C70000"}}};
margin-right: 10px;
`
const DivFormatar = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 281px;
box-sizing: border-box;
padding-right: 11px;
`
const DivItens = styled.div`
display: flex;
flex-direction: column;
height: 411px;
width: 100%;
padding-bottom: 75px;
padding-top: 24px;
box-sizing: border-box;
overflow: hidden;
overflow-y:scroll;

`
const DivWallet2 = styled.div`
position: relative;
display: flex;
height: 446px;
width: 326px;
border-radius: 5px;
background-color: #ffffff;
padding-top: 200px;
padding-left: 73px;
padding-right: 73px;
box-sizing: border-box;
overflow: hidden;
overflow-y:scroll;
font-family: 'Raleway', sans-serif;
font-size: 20px;
color: #868686;
`