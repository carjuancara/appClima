import React from 'react';
import './Card.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ItCard = styled.div`
margin: 20px;
width: 18rem;

`


export const CardTitle = styled.div`
margin-bottom: 15px;

`


export const closeIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 8px;
  margin-top: 8px;
`

export const CardBody = styled.div`
  margin-top: 0px !important;
  padding-top: 0px !important;
`


export default function Card ({min, max, name, img, onClose, id, temp}) {
    return (
      <ItCard>
        <div id="closeIcon" className="row">
            <button onClick={onClose} className="btn btn-sm btn-danger">X</button>
        </div>
        <CardBody>
        <Link to={`/ciudad/${id}`} >
            <h5 className="card-title">{name}</h5>
        </Link>
          {/* <h5 className="card-title">{name}</h5> */}
          <div className="row">
          
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Min</p>
              <p>{min}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <p>Max</p>
              <p>{max}°</p>
            </div>
            <div className="col-sm-4 col-md-4 col-lg-4">
              <img className="iconoClima" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="80" height="80" alt="" />
            </div>
          </div>
        </CardBody>
      </ItCard>
    );
};
