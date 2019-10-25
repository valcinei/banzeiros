import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt, faQuestion, faShoppingBag } from '@fortawesome/free-solid-svg-icons'
import styles from './styles.css'


export default function Header(){
    return(
        <>
        <header className={styles.header}>
            <div className="logo"><strong>B</strong>anzeiros</div>
       
                <div className="suport-tab">
                    <span>
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    Central de vendas 08000999
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faShoppingBag} />
                        Minhas Viagens
                    </span>
                    <span>
                    <FontAwesomeIcon icon={faQuestion} />
                        Ajuda
                    </span>
                </div>
        </header>
        </>
    )
}