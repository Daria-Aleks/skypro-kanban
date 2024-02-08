import PopExit from "../components/PopExit/PopExit";
import Login from "../components/Login/Login";

function PopExitPage({isAuth, setIsAuth}){
    return isAuth ? <PopExit setIsAuth={setIsAuth}/> : <Login setIsAuth={setIsAuth}></Login>
}
export default PopExitPage;