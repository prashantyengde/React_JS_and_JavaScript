import React, { useEffect, useMemo, useState } from 'react'

const TestUseMemo = () => {
    const [count, setCount] = useState(0);
    const [text, setText] = useState('')

    const handleValue = () => {
        setCount(count + 1);
    }

    const result = useMemo(() => {
        console.log("running in console...")
        for (let i = 0; i < 100; i++) {

        }
        return count * 2
    }, [count])



    // function slowFunction() {
    //     console.log("running in console...")
    //     for (let i = 0; i < 100; i++) {

    //     }
    //     return count * 2
    // }
    // const result = slowFunction();
    return (
        <div>
            <h1>{result}</h1>
            <button onClick={handleValue}>Click Me!</button> <br />
            <br />
            <input type="text" onChange={(e) => setText(e.target.value)} />
        </div>
    )
}

export default TestUseMemo
