import React, { useState } from 'react'

const TestControlled = () => {


    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: ''
    })


    const handleValue = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))

    }
    return (
        <div>

            <label htmlFor='firstName' className='mr-3' >FirstName</label>
            {formData.firstName}
            <input id='firstName' name='firstName' value={formData.firstName} type="text" className='border-2 border-white' onChange={handleValue} /> <br /><br />
            <label htmlFor='lastName' className='mr-3'>lastName</label>
            {formData.lastName}<br />
            <input id="lastName" name='lastName' value={formData.lastName} type="text" className='border-2 border-white' onChange={handleValue} /> <br /><br />
            <label htmlFor='email' className='mr-3'>email</label>
            {formData.email}<br />
            <input id="email" name='email' value={formData.email} type="text" className='border-2 border-white' onChange={handleValue} /> <br /><br />
        </div>
    )
}

export default TestControlled



