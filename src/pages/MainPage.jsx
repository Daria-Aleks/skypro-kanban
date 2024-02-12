import { Outlet } from "react-router-dom";
import { Wrapper } from "../components/Common/Common.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import { getTodos } from "../api";
import { useEffect, useState } from "react";
import { TaskContext } from "../contexts/tasks";

export default function MainPage({addCard, isAuth, setIsAuth, cards, setCards}){
    // const [cards, setCards] = useState([])
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(false)

    // const updateTasks = (cards) => {
    //     setCards(cards);
    //   };

    useEffect(() => {
        getTodos()
            .then((todos) => {todos.error ? setError(todos.error) : setCards(todos.todos), setIsLoaded(false)})
    }, [])
    return(
        <>
        {
            isAuth ? 
            // <TaskContext.Provider value={{ cards, setCards }}>
                <Wrapper>
                    <Header addCard={addCard}/>
                    <Main isLoaded={isLoaded} error={error} cardList={cards} />
                    <Outlet/>
                </Wrapper> 
            // </TaskContext.Provider>
            : <Login setIsAuth={setIsAuth}></Login>
        }
        </>
    )
}