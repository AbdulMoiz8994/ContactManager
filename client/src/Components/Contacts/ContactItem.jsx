import React from 'react'
import PropTypes from 'prop-types';
export const ContactItem = ({contacts}) => {
    console.log(contacts);
    // we do destructure all our keys of objects form contacts's object
    const {id,name,email,phone,type} =contacts
    return (
        <div className="card bg-light" key={id}>
            <h3 className="text-primary text-left">
                {name} {' '} 
                <span style={{float: 'right', borderRadius:' 3px', padding: '10px'}} className={(type === 'professional' ? 'badge-success' : 'badge-primary') }>
                    {/* The charAt Method retuns specifice index in string and slice mthod retruns specfice elements from an array */}
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                    </span>
            </h3>

            <ul>
                {email && (
                    <li>
                        <li >
                            <i className="fas fa-envelope-open"/> {email}
                        </li>
                    </li>
                )}
                {phone && (
                    <li>
                        <i className="fas fa-phone"/>  {phone}
                    </li>
                )}
            </ul>

            <p>
                <button className="btn btn-dark btn-sm">Edit</button>
                <button className="btn btn-danger btn-sm">Delete</button>
            </p>
        </div>
    )
}
