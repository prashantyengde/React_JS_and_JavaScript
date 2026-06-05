import { createBrowserRouter, redirect } from "react-router";
import Landing from "./pages/Landing";
import Career from "./pages/Career";
import Java from "./pages/Java";
import Blog from "./pages/Blog";
import About from "./About";
import MainLayout from "./pages/MainLayout";
const protectedRoute = () => {
    // const navigate = useNavigate();

    const isLoggedIn = true;

    if (!isLoggedIn) {
        throw redirect('/')
    }
}

export const router = createBrowserRouter([{
    element: <MainLayout />,
    children: [
        {
            // path: '/',
            index: true,
            element: <Landing />
        },
        {
            path: '/career',
            element: <Career />
        }, {
            path: '/career/java',
            element: <Java />
        },
        {
            path: '/blog',
            element: <Blog />,
            loader: protectedRoute
        },
        {
            path: '*',
            element: <h1>The page you are looking for does not exists</h1>
        }
    ]
},
])