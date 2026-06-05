import React from 'react'

const UserDetails = ({ LastName, number, clicked, info, name }) => {
    return (
        <div>
            <h1>{name}</h1>
            <h1>{LastName}</h1>
            <h1>{number}</h1>
            <h1>{info.accountNumber}</h1>
            <button onClick={clicked}>button</button>
        </div>
    )
}

export default UserDetails
