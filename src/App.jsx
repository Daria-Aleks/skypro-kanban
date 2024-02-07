import './App.css'
import { useEffect, useState } from 'react'
import { cardList } from './data'
import { GlobalStyle } from './Global.styled'
import { appRoutes } from "./lib/appRoutes"
import { Routes, Route } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundedPage'
import MainPage from './pages/MainPage'
import PopExitPage from './pages/PopExitPage'
import CardPage from './pages/CardPage'



function App() {
	const [cards, setCards] = useState(cardList);
  
	const [isLoaded, setIsLoaded] = useState(true);
	useEffect(()=>{
		setTimeout(()=>{
			setIsLoaded(false)
		}, 2000)
	}, [])


	function addCard() {
		setCards([
			...cards,
			{
  
				id: cards.length + 1,
			
				theme: "Web Design",
			
				title: "Название задачи",
			
				date: "30.10.23",
			
				status: "Без статуса",
			}
		])
	}
  
	return (
		<>
		<GlobalStyle/>
		<Routes>
			<Route path={appRoutes.CARD} element ={<CardPage/>}/>
			<Route path={appRoutes.MAIN} element ={<MainPage cards={cards}/>}>
			<Route path={appRoutes.EXIT} element ={<PopExitPage/>}/>
			</Route>
			<Route path={appRoutes.LOGIN} element ={<LoginPage/>}/>
			<Route path={appRoutes.REGISTER} element ={<RegisterPage/>}/>
			<Route path={appRoutes.NOT_FOUND} element ={<NotFoundPage/>}/>
		</Routes>
		
		</>);
  }


// function App() {

//   return (<Wrapper>
// 	<PopExit/>
// 	<PopNewCard/>
// 	<PopBrowse/>
// 	<Header/>
// 	<Main />
//   </Wrapper>)
// }

export default App
