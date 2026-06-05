import React, { useRef } from 'react'

const TestUncontrolled = () => {
    const text = useRef();
    const handleValue = (e) => {
        // console.log(e);
        // console.log(e.target.value)
        console.log(text.current.value)
    }
    return (
        <div>
            <input type="text" ref={text} className='border-2 border-white' onChange={handleValue} />
        </div>
    )
}

export default TestUncontrolled
