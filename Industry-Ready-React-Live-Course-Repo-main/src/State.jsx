import React, { useState } from 'react'

const State = () => {

    const [counter, setCounter] = useState(0)
    const [value, setValue] = useState('')
    const [userDetails, setUserDetails] = useState({
        name: '',
        age: ''
    })


    // let counter = 0;

    const count = () => {
        setCounter(counter => counter + 1)

        // const updatevalue = { ...userDetails, name: 'rahul ' }

        setUserDetails(userDetails.name = 'rahul')
        console.log(userDetails)
        // setCounter(counter => counter + 1)
        // setCounter(counter => counter + 1)
    }
    const handleValue = (e) => {
        console.log(e.target.value);
        const value = e.target.value;
        setValue(value);
    }

    const handleSubmit = () => {
        const updateValue = { ...userDetails, name: value }

        setUserDetails(updateValue)
    }
    return (
        <div>
            <h1>{counter}</h1>
            {userDetails.name}
            <button onClick={count}>Click Me!</button>
            {/* <h1>{userDetails}</h1> */}
            <input type="text" onChange={handleValue} />
            <button onClick={handleSubmit}>Click to submit values</button>
        </div>
    )
}

export default State
