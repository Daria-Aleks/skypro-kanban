import PopBrowse from "../components/PopBrowse/PopBrowse";
import Login from "../components/Login/Login";

function CardPage({cards, isAuth, setIsAuth}){
    return isAuth ? <PopBrowse cards={cards}/> : <Login setIsAuth={setIsAuth}></Login>
}
export default CardPage;