import Login from "../components/Login/Login";

function LoginPage({auth, isAuth, setIsAuth, setUser}){
 return (
   <Login auth={auth} isAuth={isAuth} setIsAuth={setIsAuth} setUser={setUser}/>
 )
}
export default LoginPage;