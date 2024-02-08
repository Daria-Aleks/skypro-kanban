import { Outlet } from "react-router-dom";
import { Wrapper } from "../components/Common/Common.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";


export default function MainPage({addCard, isLoaded, cards, isAuth, setIsAuth}){
    return(
        <>
        {
            isAuth ? <Wrapper>
            <Header addCard={addCard}/>
            <Main isLoaded={isLoaded} cardList={cards} />
            <Outlet/>
            </Wrapper> : <Login setIsAuth={setIsAuth}></Login>
        }
        </>
    )
}