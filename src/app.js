import React from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import MainPage from "./js/mainpage.js"
import Cadastro from "./js/cadastro.js"
import NovaEntrada from "./js/novaentrada.js"
import NovaSaida from "./js/novasaida.js"
import Home from "./js/home.js"
import {useState} from "react"


export default function App()
{
    const [authToken, setAuthtoken] = React.useState("")
    const [userName, setUserName] = React.useState("Fulano")
    

    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage setAuthtoken={setAuthtoken} setUserName={setUserName}/>} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/nova-entrada" element={<NovaEntrada authtoken={authToken}/>}/>
          <Route path="/nova-saida" element={<NovaSaida authtoken={authToken}/>}/>
          <Route path="/home" element={<Home authtoken={authToken} user={userName}/>}/>
        </Routes>
      </BrowserRouter>
    )
}

