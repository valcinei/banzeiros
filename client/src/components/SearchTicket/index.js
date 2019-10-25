import React from 'react'

import style from'./style.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'

const SearchTicket = () =>
    (
        <div className="container" >
            <div>
                    <span>
                    Pacotes de viagens
                    </span>
                    <ul>
                        <li>
                            Viagem+Hospedagem
                        </li>

                        <li>
                            Viagem+Moto
                        </li>

                        <li>
                            Voo+Guia
                        </li>
                    </ul>
             
            </div>
            <div>
                <div className="input-group">
                    <span className="input-label">Origem</span>
                    <div className="input-content">
                        <input type="text" placeholder="Cidade Origem" className="input"/>
                        <FontAwesomeIcon className="input-icon" icon={faPhoneAlt}/>
                    </div>
                </div>

                <div className="input-group">
                    <span className="input-label">Destino</span>
                    <div className="input-content">
                        <input type="text" placeholder="Cidade Destino" className="input"/>
                        <FontAwesomeIcon className="input-icon" icon={faPhoneAlt}/>
                    </div>
                </div>
                <div className="input-group">
                    <span className="input-label">Datas</span>
                    <div className="input-content">
                        <input type="date" placeholder="Ida" className="input"/>
                        <FontAwesomeIcon className="input-icon" icon={faPhoneAlt}/>
                    </div>
                </div>
                <div className="input-group">
                    <span className="input-label"></span>
                    <div className="input-content">
                        <input type="date" placeholder="Volta" className="input"/>
                        <FontAwesomeIcon className="input-icon" icon={faPhoneAlt}/>
                    </div>
                </div>
                <div className="input-group">
                    <span className="input-label">Quartos</span>
                    <div className="input-content">
                        <input type="number" placeholder="Qtd" className="input"/>
                        <FontAwesomeIcon className="input-icon" icon={faPhoneAlt}/>
                    </div>
                </div>
                    <button className="btn btn-prymary">
                        Procurar
                    </button>

    
            </div>
        </div>
    )
export default SearchTicket