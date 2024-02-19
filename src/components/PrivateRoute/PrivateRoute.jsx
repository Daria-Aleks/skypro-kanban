import { Outlet, Navigate } from "react-router-dom";
import { appRoutes } from "../../lib/appRoutes";
import { useUser } from "../../hooks/useUser";
import { useState } from "react";
import Main from "../Main/Main";
export default function PrivateRoute() {
  const {user} = useUser();
  // сonsole.log(user)
  // const [user, setUser]= useState('user');

  return user ? <Outlet/> : <Navigate to={appRoutes.LOGIN}/>
}