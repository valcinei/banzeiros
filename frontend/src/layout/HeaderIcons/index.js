import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faShip} from '@fortawesome/free-solid-svg-icons'
import  style from './style.css'


const HeaderIcons = () => {

   let icons = [
       { id: 1, icon: faShip, description: "Barcos"},
       { id: 2, icon: faShip, description: "Canoas"},
       { id: 3, icon: faShip, description: "Voadeiras"},
       { id: 4, icon: faShip, description: "Catraias"},
       { id: 5, icon: faShip, description: "Barcos"},
       { id: 6, icon: faShip, description: "Canoas"},
       { id: 7, icon: faShip, description: "Voadeiras"},
       { id: 8, icon: faShip, description: "Catraias"},
       { id: 9, icon: faShip, description: "Canoas"},
       { id: 10, icon: faShip, description: "Voadeiras"},
       { id: 11, icon: faShip, description: "Catraias"},
   ]

    return(
        <>
        <div className="menu-icon-container">
            <ul>
                { icons.map((item, key)=>
                    <li className="item" key={item.id}>

                        <div >
                        <FontAwesomeIcon className="icon" icon={item.icon} />
                        </div> 
                        <div>
                              {item.description}
                        </div> 
                    </li>
                ) }

            </ul>
        </div>
        </>
    )
}
export default HeaderIcons