import React from "react";
import { Navigate, Outlet } from "react-router-dom";
interface PrivateRouteProps{
    isAuthenticated:boolean;
    defaultRoute:string
}
const PrivateRoute:React.FC<PrivateRouteProps>=({isAuthenticated,defaultRoute='/'})=>{
    if(!isAuthenticated){
        return <Navigate to={defaultRoute} replace/>
    }
    {
        return<Outlet/>
    }
}
export default PrivateRoute;