import React, { useEffect, useRef, useState } from "react";

const TestUseRef = () => {
    const [count, setCount] = useState(0);
    const value = useRef(0);
    const text = useRef();

    const btn = useRef();
    console.log(btn);
    const handlValue = () => {
        value.current = value.current + 1;
        setCount(count + 1);
        btn.current.innerText = "red";
        console.log(value);
    };

    useEffect(() => {
        text.current.focus();
    }, []);

    return (
        <div>
            <h1>{count}</h1>
            <button ref={btn}>I am a button</button> <br />
            <br />
            <button onClick={handlValue}>Click me!</button> <br />
            <br />
            <input ref={text} type="text" />
        </div>
    );
};

export default TestUseRef;
