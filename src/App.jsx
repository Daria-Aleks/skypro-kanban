import './App.css'
import { useEffect, useState } from 'react'
import { cardList } from './data'
import { GlobalStyle } from './Global.styled'
import { appRoutes } from "./lib/appRoutes"
import { Routes, Route, useParams } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundedPage'
import MainPage from './pages/MainPage'
import PopExitPage from './pages/PopExitPage'
import CardPage from './pages/CardPage'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'


function App() {
	const [cards, setCards] = useState(cardList);
	const [isLoaded, setIsLoaded] = useState(true);
	const [isAuth, setIsAuth] = useState(false)
	
	useEffect(()=>{
		setTimeout(()=>{
			setIsLoaded(false)
		}, 2000)
	}, [])
  
	return (
		<>
		<GlobalStyle/>
		<Routes>
			<Route element={<PrivateRoute isAuth={isAuth}></PrivateRoute>}>
				<Route path={appRoutes.MAIN} element ={<MainPage cards={cards}/>}>
					<Route path={appRoutes.EXIT} element ={<PopExitPage setIsAuth={setIsAuth}/>}/>
					<Route path={`${appRoutes.CARD}/:id`} element ={<CardPage cards={cards}/>}/>
				</Route>
			</Route>
			<Route path={appRoutes.LOGIN} element ={<LoginPage setIsAuth={setIsAuth}/>}/>
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
