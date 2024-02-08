import { Outlet } from "react-router-dom";
import { Wrapper } from "../components/Common/Common.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import { getTodos } from "../api";
import { useEffect, useState } from "react";

export default function MainPage({addCard, isAuth, setIsAuth}){
    const [cards, setCards] = useState([])
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(false)
    useEffect(() => {
        getTodos()
            .then((todos) => {todos.error ? setError(todos.error) : setCards([]), setIsLoaded(false)})
    }, [])
    return(
        <>
        {
            isAuth ? <Wrapper>
            <Header addCard={addCard}/>
            <Main isLoaded={isLoaded} error={error} cardList={cards} />
            <Outlet/>
            </Wrapper> : <Login setIsAuth={setIsAuth}></Login>
        }
        </>
    )
}