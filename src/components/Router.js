import {createBrowserRouter,Outlet} from 'react-router-dom'
import Home from '../Home';
import Register from '../components/register/Register'

function Layout(){
    return(
        <>
            <Outlet/>
        </>
    )
}

let router = createBrowserRouter([
    {
        path: "",
        element : <Layout/>,
        children:[
            {
                index  : true,
                element:<Home/>
            },
            {
                path : '/edit/:update',
                element : <Register/>
            }
            
        ]
    }
])

export default router;