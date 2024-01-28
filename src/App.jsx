import './App.css'
import Header from './components/Header/Header'
import Wrapper from './components/Wrapper/Wrapper'
import Main from './components/Main/Main'
import PopExit from './components/PopExit/PopExit'
import PopNewCard from './components/PopNewCard/PopNewCard'
import PopBrowse from './components/PopBrowse/PopBrowse'


function App() {
  return (<Wrapper>
	<PopExit/>
	<PopNewCard/>
	<PopBrowse/>
	<Header/>
	<Main />
  </Wrapper>)
}

export default App
