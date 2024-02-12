import Login from "../components/Login/Login";

function LoginPage({auth, isAuth, setIsAuth}){
 return (
   <Login auth={auth} isAuth={isAuth} setIsAuth={setIsAuth}/>
 )
}
export default LoginPage;