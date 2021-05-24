import React, { useContext } from 'react'
import {AlertContext} from '../../Context/Alert/AlertContext'
export const Alerts = () => {

    const alertContext=useContext(AlertContext)
    const {alert}=alertContext
    return (
        <div>
            {alert.length > 0 && 
            // we use function()=>{ } with function for comp using retrun() keyword
            alert.map((alert) =>{
                return(
               <div key={alert.id} className={`alert alert-${alert.type}`}>
         <i  className="fas fa-info-circle" /> {alert.msg}
               </div>
               )
            })}
        </div>
    )
}
