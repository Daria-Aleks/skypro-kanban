import { Outlet } from "react-router-dom";
import { Wrapper } from "../components/Common/Common.styled";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import PopBrowse from "../components/PopBrowse/PopBrowse";
import PopExit from "../components/PopExit/PopExit";
import PopNewCard from "../components/PopNewCard/PopNewCard";

export default function MainPage({addCard, isLoaded, cards}){
    return(
        <>
        <Wrapper>
		{/* <PopExit/>
		<PopNewCard/>
		<PopBrowse/> */}
		<Header addCard={addCard}/>
		<Main isLoaded={isLoaded} cardList={cards} />
        <Outlet/>
		</Wrapper>
        </>
    )
}