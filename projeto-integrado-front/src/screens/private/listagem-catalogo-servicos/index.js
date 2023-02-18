import * as React from "react";
import Listagem from "./ListagemCatalogoServicos";
import {useEffect, useState} from "react";
import PrestadorServicoService from "../../../services/prestadorServicoService.js";

const ListagemCatalogoServico = () => {
    const [prestador, setPrestador] = useState([]);
    
    useEffect(() => {
        PrestadorServicoService.getAllPrestadores()
            .then(data => setPrestador(data))
    }, prestador);
    
    return (<Listagem items={prestador}/>)
}