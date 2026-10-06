import React, { useState } from "react";
import "./style.css";

export default function PaginaInicial(){
    const[numeroAleatorio, setNumeroAleatorio] = useState(0)


    function gerarNumero(){
        const NovoNumero = Math.floor(Math.random()*100);
        setNumeroAleatorio(NovoNumero)
    }

    return (
        <div className="conteudo-centralizado">
           <h1>Gerador de numeros personalizados</h1>
           <h2>{numeroAleatorio}</h2>

           <div className="area-botao">
            <label htmlFor="">clique no botao para gerar um numero aleatorio</label>
            <Button onClick = {gerarNumero}>Gerar numero</Button>
           </div>
        </div>
    );
}