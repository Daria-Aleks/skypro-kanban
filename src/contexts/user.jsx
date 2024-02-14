import { createContext, useState } from "react";
import { appRoutes } from "../lib/appRoutes";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext(null);

function getUserFromLS() {
  try {
    const saved = localStorage.getItem("user");
    return saved
  }
  catch (error) {
    console.log(error)
    return null
  }
}

export const UserProvider = ({children}) => {
  const [user, setUser] = useState(getUserFromLS())
  let navigate = useNavigate();

  const loginUser = (user) => {
    setUser(user.login)
    navigate(appRoutes.MAIN)
    localStorage.setItem("user", user.login)
  }

  const logoutUser = () => {
    setUser(null)
    navigate(appRoutes.LOGIN)
    localStorage.removeItem("user")
  }

  return (
    <UserContext.Provider value={{user, loginUser, logoutUser}}>
      {children}
    </UserContext.Provider>
  )
}
// export function useUserContext() {

//   const user = useContext(UserContext);

//   if (!user) {
//     throw new Error("Данные пользователя не были найдены");
//   }

//   return user;
// }