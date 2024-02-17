import { Link, useParams } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from 'react-day-picker';
import { changeTodo } from "../../api";
import { useTasks } from "../../hooks/useTasks";
import { CardThemeDesk, CardThemeTextDesk } from "../Card/Card.styled";
import { useEffect } from "react";
import { getTodos } from "../../api";
import { deleteTodo } from "../../api";
import { PopBrowseBlock, PopBrowseContainer, PopBrowseContent, PopBrowseForm, PopBrowseTopBlock, PopBrowseWrap, PopBrowsee, Status, StatusP, StatusThemes, Subttl, FormBrowseBlock, FormBrowseAreaEdit, PopBrowseBtnEdit, BtnGroup, BtnBg, BtnBor, PDate, SubttlD } from "./PopCreated.styled";
function PopChangeCard(){
    const params = useParams();
    const [selected, setSelected] = useState(null);
    const {cards} = useTasks();
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
    let card = null;
    let data = {
        "title": card?.title,
        "topic": card?.topic,
        "status": card?.status,
        "description": '123',
        "date": card?.date
      }
    const [form, setForm] = useState(data)
    const [activeStatus, setActiveStatus] = useState(null)
    let color;
    let footer = <PDate>Please pick a day.</PDate>;
    let active = "status__theme _gray"
    let notActive = "status__theme"
    let activeP = '_gray'
    let notActiveP = ''

    function deleteTask() {
      deleteTodo(params.id)
          .then(getTodos)
          .then((data) => {
            getCards(data.tasks)
        })
    }

    for (let element of cards) {
      if (element._id == params.id) {
        card = element
        card.status = card.status
        console.log(card.date)
        theme()
      }
    }

    useEffect(() => {
      setActiveStatus(card?.status)
      setForm({
        ...form,
        'topic': card.topic
      })
      data.topic = card.topic
    }, [card])

    useEffect(() => {
      setForm({
        ...form,
        'date': selected
      })
    }, [selected])

    if (selected) {
      footer = <PDate>You picked {format(selected, 'PP')}.</PDate>;
      card.date = format(selected, 'PP')
    }

    const handleClickChange = (value) => {
      setForm({
        ...form,
        'status': value
      })
      setActiveStatus(value)
    };

    const handleInputChange = (e) => {
      const { value } = e.target;
      setForm({
        ...form,
        'title': value
      })
    };

    function saveTask() {
      changeTodo(params.id, form)
        .then(getTodos())
        .then((data) => {
          getCards(data.tasks)
        })
    }

    function theme() {
      switch (card?.topic) {
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


    return (
    <PopBrowsee>
        <PopBrowseContainer>
            <PopBrowseBlock>
                <PopBrowseContent>
                    <PopBrowseTopBlock>
                        <Subttl>Название задачи</Subttl>
                        <CardThemeDesk $themeColor={color}>
                          <CardThemeTextDesk>{card?.topic}</CardThemeTextDesk>
                        </CardThemeDesk>
                    </PopBrowseTopBlock>
                    <Status>
                        <StatusP>Статус</StatusP>
                        <StatusThemes>
                            <div className={activeStatus == 'Без статуса' ? active : notActive} onClick={() => handleClickChange("Без статуса")}>
                                <p className={activeStatus == 'Без статуса' ? activeP : notActiveP}>Без статуса</p>
                            </div>
                            <div className={activeStatus == 'В работе' ? active : notActive} onClick={() => handleClickChange("В работе")}>
                                <p className={activeStatus == 'В работе' ? activeP : notActiveP}>В работе</p>
                            </div>
                            <div className={activeStatus == 'Тестирование' ? active : notActive} onClick={() => handleClickChange("Тестирование")}>
                                <p className={activeStatus == 'Тестирование' ? activeP : notActiveP}>Тестирование</p>
                            </div>
                            <div className={activeStatus == 'Готово' ? active : notActive} onClick={() => handleClickChange("Готово")}>
                                <p className={activeStatus == 'Готово' ? activeP : notActiveP}>Готово</p>
                            </div>
                        </StatusThemes>
                    </Status>
                    <PopBrowseWrap>
                        <PopBrowseForm id="formBrowseCard" action="#">									
                            <FormBrowseBlock>
                                <Subttl>Описание задачи</Subttl>
                                <FormBrowseAreaEdit 
                                  name="text" 
                                  placeholder="Введите описание задачи..."
                                  onChange={handleInputChange}
                                  ></FormBrowseAreaEdit>
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
                                  onSelect={setSelected}
                                  footer={footer}                            
                                  />
                                </div>
                        
                                <input type="hidden" id="datepick_value" value="08.09.2023" />
                                <div>
                                    <PDate>Срок исполнения: <span className="date-control">{format(card?.date || new Date(), 'dd.mm.yy')}</span></PDate>
                                </div>
                            </div>
                        </div>
                    </PopBrowseWrap>
                    <PopBrowseBtnEdit>
                        <BtnGroup>
                            <BtnBg onClick={saveTask}><Link to={appRoutes.MAIN}>Сохранить</Link></BtnBg>
                            <BtnBor><Link to={appRoutes.MAIN}>Отменить</Link></BtnBor>
                            <BtnBor onClick={deleteTask}><Link to={appRoutes.MAIN}>Удалить задачу</Link></BtnBor>
                        </BtnGroup>
                        <BtnBg type="button"><Link to={appRoutes.MAIN}>Закрыть</Link></BtnBg>
                    </PopBrowseBtnEdit>                   
                </PopBrowseContent>
            </PopBrowseBlock>
        </PopBrowseContainer>
    </PopBrowsee>
    )
}
export default PopChangeCard