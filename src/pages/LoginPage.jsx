import Login from "../components/Login/Login";

function LoginPage({auth, isAuth, setIsAuth, setUser}){
 return (
   <Login setIsAuth={setIsAuth} setUser={setUser}/>
 )
}
export default LoginPage;