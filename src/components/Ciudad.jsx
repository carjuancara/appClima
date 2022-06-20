import React from "react";
//import { useParams } from "react-router-dom";
import './Ciudad.css';
export default function Ciudad({ city }) {
    //var { ciudadId } = useParams();
    return (
        <div className="contenedorCiudad">
            <div >
                <h2 className="titulo">{city.name}</h2>
                <div className="info">
                    <div className="temp">Temperatura: {city.temp} ºC</div>
                    <div className="clima">Clima: {city.weather}</div>
                    <div className="viento">Viento: {city.wind} km/h</div>
                    <div className="nubes">Cantidad de nubes: {city.clouds}</div>
                    <div className="latitud">Latitud: {city.latitud}º</div>
                    <div className="longitud">Longitud: {city.longitud}º</div>
                    <div className="mapa"></div>
                </div>
            </div>
        </div>
    )
}