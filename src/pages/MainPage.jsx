import { Outlet } from "react-router-dom";
import { Wrapper } from "../components/Common/Common.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import Login from "../components/Login/Login";
import { getTodos } from "../api";
import { useEffect, useState } from "react";
import { TaskContext } from "../contexts/tasks";
import { useUser } from "../hooks/useUser";
import { useTasks } from "../hooks/useTasks";

export default function MainPage({addCard, cards}){

    const {user} = useUser()
    const {getCards} = useTasks()
    const [isLoaded, setIsLoaded] = useState(true);
    const [error, setError] = useState(false)

    useEffect(() => {
        getTodos()
            .then((todos) => {todos.error ? setError(todos.error) : getCards(todos.tasks), setIsLoaded(false)})
    }, [])
    return(
        <>
        {

            // <TaskContext.Provider value={{ cards, setCards }}>
                <Wrapper>
                    <Header addCard={addCard} userData={user}/>
                    <Main isLoaded={isLoaded} error={error} cardList={cards} />
                    <Outlet/>
                </Wrapper> 
            // </TaskContext.Provider>

        }
        </>
    )
}