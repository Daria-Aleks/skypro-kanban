import PopCreateCard from "../components/PopCreateCard/PopCreateCard";
import Login from "../components/Login/Login";

function CreateCardPage({isAuth, setIsAuth}){
    return isAuth ? <PopCreateCard/> : <Login setIsAuth={setIsAuth}></Login>
}
export default CreateCardPage;