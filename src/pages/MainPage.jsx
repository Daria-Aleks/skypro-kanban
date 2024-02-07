import { Outlet } from "react-router-dom";
import { Wrapper } from "../components/Common/Common.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";

export default function MainPage({addCard, isLoaded, cards}){
    return(
        <>
        <Wrapper>
		<Header addCard={addCard}/>
		<Main isLoaded={isLoaded} cardList={cards} />
        <Outlet/>
		</Wrapper>
        </>
    )
}