import { Link, useParams } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { set } from "date-fns";
import { DayPicker } from 'react-day-picker';
import { format } from "date-fns";
import { useTasks } from "../../hooks/useTasks";
import { CardThemeText, CardTheme } from "../Card/Card.styled";
import { useEffect } from "react";
import { deleteTodo } from "../../api";
import { getTodos } from "../../api";

function PopBrowse(){
    const {cards} = useTasks();
    const params = useParams();
    let card = null
    let color;
    const [selected, setSelected] = useState(null);
    const {getCards} = useTasks()

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
    <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
            <div className="pop-browse__block">
                <div className="pop-browse__content">
                    <div className="pop-browse__top-block">
                        <h3 className="pop-browse__ttl">Название задачи</h3>
                        <CardTheme $themeColor={color}>
                          <CardThemeText>{card?.topic}</CardThemeText>
                        </CardTheme>
                    </div>
                    <div className="pop-browse__status status">
                        <p className="status__p subttl">Статус</p>
                        <div className="status__themes" >
                            <div className="status__theme _gray">
                                <p className="_gray">{card?.status}</p>
                            </div>
                        </div>
                    </div>
                    <div className="pop-browse__wrap">
                        <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
                            <div className="form-browse__block">
                                <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                <textarea className="form-browse__area" name="text" id="textArea01" readOnly placeholder={card?.title}></textarea>
                            </div>
                        </form>
                        <div className="pop-new-card__calendar calendar">
                            <p className="calendar__ttl subttl">Даты</p>
                            <div className="calendar__block">
                                <div className="calendar__content">
                                    <DayPicker 
                                    mode="single"
                                    selected={selected}
                                    />
                                </div>
                        
                                <input type="hidden" id="datepick_value" value="08.09.2023" />
                                <div className="calendar__period">
                                    <p className="calendar__p date-end">Срок исполнения: <span className="date-control">{format(card?.date || new Date(), "PP")}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="theme-down__categories theme-down">
                        <p className="categories__p subttl">Категория</p>
                        <div className="categories__theme _orange _active-category">
                            <p className="_orange">Web Design</p>
                        </div>
                    </div>
                    <div className="pop-browse__btn-browse ">
                        <div className="btn-group">
                            <button className="btn-browse__edit _btn-bor _hover03"><Link to={`${appRoutes.CHANGE}/${params.id}`}>Редактировать задачу</Link></button>
                            <button className="btn-browse__delete _btn-bor _hover03" onClick={deleteTask}><Link to={appRoutes.MAIN}>Удалить задачу</Link></button>
                        </div>
                        <button className="btn-browse__close _btn-bg _hover01" type="button"><Link to={appRoutes.MAIN}>Закрыть</Link></button>
                    </div>               
                </div>
            </div>
        </div>
    </div>
    )
}
export default PopBrowse