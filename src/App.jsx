import './App.css'
import { useState, useEffect } from 'react'
import { GlobalStyle } from './Global.styled'
import { appRoutes } from "./lib/appRoutes"
import { Routes, Route, useParams, Outlet } from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import NotFoundPage from './pages/NotFoundedPage'
import MainPage from './pages/MainPage'
import PopExitPage from './pages/PopExitPage'
import CardPage from './pages/CardPage'
import CreateCardPage from './pages/CreateCardPage'
import { TaskProvider } from './contexts/tasks'
import PrivateRoute from './components/PrivateRoute/PrivateRoute'
import { useTasks } from './hooks/useTasks'

function App() {
	const [isAuth, setIsAuth] = useState(true);
	const {cards} = useTasks()
	// console.log(cards)
	// const [cards, setCards ] = useState("user")
	// const [user, setUser] = useState(() => {
	// 	const saved = localStorage.getItem("user");
	// 	const initialValue = JSON.parse(saved);
	// 	return initialValue || "user";
	// })

	// const updateTasks = (card) => {
  //   setCards(card);
  // };

	// useEffect(() => {
	// 	localStorage.setItem("user", JSON.stringify(user));
	// }, [user]);

	return (
		<>
				<Routes>
				<Route element={<PrivateRoute><Outlet></Outlet></PrivateRoute>}>
						<Route path={appRoutes.MAIN} element ={<MainPage cards={cards} />}>
							<Route path={appRoutes.EXIT} element ={<PopExitPage setIsAuth={setIsAuth}/>}/>
							<Route path={`${appRoutes.CARD}/:id`} element ={<CardPage/>}/>
						<Route path={appRoutes.CREATE} element ={<CreateCardPage/>}/>
					</Route>
					</Route>
					<Route path={appRoutes.LOGIN} element ={<LoginPage setIsAuth={setIsAuth}/>}/>
					<Route path={appRoutes.REGISTER} element ={<RegisterPage/>}/>
					<Route path={appRoutes.NOT_FOUND} element ={<NotFoundPage/>}/>
				</Routes>
			<GlobalStyle/>
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
