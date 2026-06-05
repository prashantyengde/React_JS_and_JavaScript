import React from 'react'
import TestUseRef from './TestUseRef'
import TestUseMemo from './TestUseMemo'
import Home from './Home'
import About from './About'
import TestUncontrolled from './TestUncontrolled'
import TestControlled from './TestControlled'
import { RouterProvider } from 'react-router'
import { router } from './router'

const App = () => {
    return (
        <div>
            {/* <TestUseRef /> */}
            {/* <TestUseMemo /> */}
            {/* <Home />
            <About /> */}
            {/* <TestUncontrolled /> */}
            {/* <TestControlled /> */}
            <RouterProvider router={router} />
        </div>
    )
}



export default App
