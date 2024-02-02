import './App.css'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
import Main from './components/Main/Main'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'
import { useEffect, useState } from 'react'
import { cardList } from './data'
import { GlobalStyle } from './Global.styled'

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
		<Wrapper>
		<PopExit/>
		<PopNewCard/>
		<PopBrowse/>
		<Header addCard={addCard}/>
		<Main isLoaded={isLoaded} cardList={cards} />
		</Wrapper>
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
