import Column from "../Column/Column"
import { Container } from "../Common/Common.styled"
import { MainBlock, MainContent, MainDiv } from "./Main.styled"
import { BrowserRouter } from 'react-router-dom';


const statusList = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

function Main({cardList, isLoaded, error}){
    return (
    <MainDiv>
    <Container>
        <MainBlock>
            <MainContent>
                {
                    isLoaded? 'Loading' : error? "Не удалось загрузить данные, попробуйте позже ": statusList.map((item) => (
                        <Column 
                        key = {item}
                        title = {item}
                        cardList ={cardList.length > 0 ? cardList?.filter((card => card.status === item)) : []} />
                    )) 
                }
            </MainContent>
        </MainBlock>
    </Container>
    </MainDiv>
  
)
}
export default Main