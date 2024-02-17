import { Link, useParams } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import { useTasks } from "../../hooks/useTasks";
import { CardThemeTextDesk, CardThemeDesk } from "../Card/Card.styled";
import { PDate, PopBrowsee, SubttlD } from "../PopCreateCard/PopCreated.styled";
import { useEffect } from "react";
import { deleteTodo } from "../../api";
import { getTodos } from "../../api";
import { PopBrowseContainer, PopBrowseBlock, PopBrowseContent, PopBrowseTopBlock, PopBrowseTtl, Status, StatusP, StatusThemes, StatusTheme, Gray, PopBrowseWrap, PopBrowseForm, FormBrowseBlock, Subttl, FormBrowseArea, PopBrowseBtnBrowse, BtnGroup, BtnBor, BtnBg} from "../PopCreateCard/PopCreated.styled";
function PopBrowse(){
    const {cards} = useTasks();
    const params = useParams();
    let card = null
    let color;
    const [selected, setSelected] = useState(null);
    const {getCards} = useTasks()
    const css = `
    .rdp {
        --rdp-cell-size: 30px;
        color: gray;
    }
    .rdp-cell {
        font-size: 13px
    }
  `;
  
    useEffect(() => {
        setSelected(selected)
      }, [selected])

    function deleteTask() {
        deleteTodo(params.id)
            .then(getTodos)
            .then((data) => {
                getCards(data.tasks)
            })
    }

    function theme() {
        switch (card.topic) {
          case "Web Design":
              color = "_orange";
              break;
          case "Copywriting":
              color = "_purple";
              break;
          case "Research":
            color = "_green";
            break;
        } 
      }
      
    for (let element of cards) {
        if (element._id == params.id) {
          card = element
          theme()
        }
      }

    return (
    <PopBrowsee>
        <PopBrowseContainer>
            <PopBrowseBlock>
                <PopBrowseContent>
                    <PopBrowseTopBlock>
                        <PopBrowseTtl>Название задачи</PopBrowseTtl>
                        <CardThemeDesk $themeColor={color}>
                          <CardThemeTextDesk>{card?.topic}</CardThemeTextDesk>
                        </CardThemeDesk>
                    </PopBrowseTopBlock>
                    <Status>
                        <StatusP>Статус</StatusP>
                        <StatusThemes>
                            <StatusTheme >
                                <Gray>{card?.status}</Gray>
                            </StatusTheme>
                        </StatusThemes>
                    </Status>
                    <PopBrowseWrap>
                        <PopBrowseForm action="#">									
                            <FormBrowseBlock>
                                <Subttl>Описание задачи</Subttl>
                                <FormBrowseArea id="textArea01" readOnly placeholder={card?.title}></FormBrowseArea>
                            </FormBrowseBlock>
                        </PopBrowseForm>
                        <div>
                            <SubttlD>Даты</SubttlD>
                            <div>
                                <div>
                                    <style>{css}</style>
                                    <DayPicker 
                                    mode="single"
                                    selected={selected}
                                    />
                                </div>
                        
                                <input type="hidden" id="datepick_value" value="08.09.2023" />
                                <div>
                                    <PDate>Срок исполнения: <span>{format(card?.date || new Date(), "dd.mm.yy")}</span></PDate>
                                </div>
                            </div>
                        </div>
                    </PopBrowseWrap>
                    <PopBrowseBtnBrowse>
                        <BtnGroup>
                            <BtnBor><Link to={`${appRoutes.CHANGE}/${params.id}`}>Редактировать задачу</Link></BtnBor>
                            <BtnBor onClick={deleteTask}><Link to={appRoutes.MAIN}>Удалить задачу</Link></BtnBor>
                        </BtnGroup>
                        <BtnBg type="button"><Link to={appRoutes.MAIN}>Закрыть</Link></BtnBg>
                    </PopBrowseBtnBrowse>               
                </PopBrowseContent>
            </PopBrowseBlock>
        </PopBrowseContainer>
    </PopBrowsee>
    )
}
export default PopBrowse