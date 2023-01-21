import React from "react"
import styled from "styled-components"

export default function Home(){
    const array = [{data: "05/12",descricao: "AAAAAAAAAAA",valor: "10,20"},{data: "05/12",descricao: "BBBBBBBBBBBB",valor: "20,30"}]
    
    
    return (
        <Main>
            <PageTitle><span>Olá, Fulano</span></PageTitle>
            <DivWallet>
                <DivItens>
                    {array.map((infos) => {
                        return(
                            <ItensWallet>
                                <DataWallet>{infos.data}</DataWallet>
                                <DivFormatar>
                                    <DescricaoWallet>{infos.descricao}</DescricaoWallet>
                                    <ValorWallet>{infos.valor}</ValorWallet>
                                </DivFormatar>
                            </ItensWallet>)
                    })}
                </DivItens>                
                <Saldo>
                    <PalavraSaldo>SALDO</PalavraSaldo>
                    <SaldoTotal>600 conto</SaldoTotal>
                </Saldo>
            </DivWallet>
            <DivBotoes>
                <Botoes><p>+</p><p>Nova entrada</p></Botoes>
                <Botoes><div>-</div><div>Nova saída</div></Botoes>
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
color: #C70000;
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