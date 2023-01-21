import React from "react"
import {BrowserRouter, Routes, Route, Link} from "react-router-dom"
import MainPage from "./js/mainpage.js"
import Cadastro from "./js/cadastro.js"
import NovaEntrada from "./js/novaentrada.js"
import NovaSaida from "./js/novasaida.js"
import Home from "./js/home.js"

export default function App()
{
    return (
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/nova-entrada" element={<NovaEntrada />}/>
          <Route path="/nova-saida" element={<NovaSaida />}/>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    )
}

