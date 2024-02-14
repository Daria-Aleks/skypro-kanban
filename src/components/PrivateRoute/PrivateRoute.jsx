import { Outlet, Navigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";

export default function PrivateRoute() {
  const [user, setUser]= useState('user');
  // console.log(user, 'user')
  return user ? <Outlet/> : <Navigate to={appRoutes.MAIN}/>
}