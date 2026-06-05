import React, { useEffect, useState } from 'react'
import useApiData from './useApiData'

const Home = () => {
    const [theme, setTheme] = useState('light');

    const handleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('class', newTheme)
        setTheme(newTheme)
    }

    return (
        // <div className='flex gap-4 sm:flex-col lg:flex-row'>
        //     <div className='bg-blue-400 text-black p-3'>box 1</div>
        //     <div className='bg-yellow-400 text-black p-3'>box 2</div>
        // </div>


        <nav>
            <ul>
                <li className='hidden sm:flex gap-4 justify-center bg-white dark:bg-black dark:text-yellow-400'>
                    <h1>Home</h1>
                    <h1>About</h1>
                    <h1>Contact</h1>
                </li>

                <button onClick={handleTheme}>{theme === 'light' ? 'toggle dark' : 'toggle light'}</button>

                <h1 className='sm:hidden'>≡</h1>
            </ul>
        </nav>
    )
}

export default Home

// mobile-> tablet -> laptop -> monitor/desktop

// sm, md, lg, xl

// sm: ≥ 640px
// md: ≥ 768px
// lg: ≥ 1024px
// xl: ≥ 1280px 


