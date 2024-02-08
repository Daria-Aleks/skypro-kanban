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



function App() {
	// const [isLoaded, setIsLoaded] = useState(true);
	const [isAuth, setIsAuth] = useState(true)
	
	// useEffect(()=>{
	// 	setTimeout(()=>{
	// 		setIsLoaded(false)
	// 	}, 2000)
	// }, [])
  
	return (
		<>
		<GlobalStyle/>
		<Routes>
			<Route path={appRoutes.MAIN} element ={<MainPage isAuth={isAuth} setIsAuth={setIsAuth}/>}>
			<Route path={appRoutes.EXIT} element ={<PopExitPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
			<Route path={`${appRoutes.CARD}/:id`} element ={<CardPage isAuth={isAuth} setIsAuth={setIsAuth}/>}/>
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
