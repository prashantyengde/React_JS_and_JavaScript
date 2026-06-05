import React, { useEffect, useState } from 'react'

const TestUseEffect = () => {
    const [count, setCount] = useState(0);
    const [counter, setCounter] = useState(0);

    console.log("I will run everytime");

    useEffect(() => {
        console.log("I will run inside useEffect")
    })

    useEffect(() => {
        console.log("I will run only once when components get mount")
    }, [])

    useEffect(() => {
        console.log("I will run only when components get mount and dependency value gets change/update")
    }, [count, counter])

    useEffect(() => {
        const id = setInterval(() => {
            console.log('running after each seconds')
        }, 1000)

        return (() => {
            clearInterval(id)
        })
    }, [])


    const handleValue = () => {
        setCount(count + 1);
    }
    const handleValue2 = () => {
        setCounter(counter + 1);
    }


    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleValue}>Click Me!</button> <br /><br />
            <h1>{counter}</h1>
            <button onClick={handleValue2}>Click Me 2!</button>
        </div>
    )
}

export default TestUseEffect
