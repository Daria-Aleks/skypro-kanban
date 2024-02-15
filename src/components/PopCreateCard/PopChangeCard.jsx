import { Link, useParams } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { format } from "date-fns";
import { DayPicker } from 'react-day-picker';
import { changeTodo } from "../../api";
import { useTasks } from "../../hooks/useTasks";
import { CardThemeText, CardTheme } from "../Card/Card.styled";
import { useEffect } from "react";
import { getTodos } from "../../api";
import { deleteTodo } from "../../api";

function PopChangeCard(){
    const params = useParams();
    const [selected, setSelected] = useState(null);
    const {cards} = useTasks();
    const {getCards} = useTasks()
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
    let footer = <p>Please pick a day.</p>;
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
        'topic': card?.topic
      })
      console.log(card?.topic)
    }, [card])

    useEffect(() => {
      setForm({
        ...form,
        'date': selected
      })
    }, [selected])

    if (selected) {
      footer = <p>You picked {format(selected, 'PP')}.</p>;
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
                        </div>
                    </div>
                    <div className="pop-browse__wrap">
                        <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
                            <div className="form-browse__block">
                                <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                <textarea 
                                  className="form-browse__area" 
                                  name="text" id="textArea01" 
                                  placeholder="Введите описание задачи..."
                                  onChange={handleInputChange}
                                  ></textarea>
                            </div>
                        </form>
                        <div className="pop-new-card__calendar calendar">
                            <p className="calendar__ttl subttl">Даты</p>
                            <div className="calendar__block">
                                <div className="calendar__content">

                                <DayPicker 
                                  mode="single"
                                  selected={selected}
                                  onSelect={setSelected}
                                  footer={footer}                            
                                  />
                                </div>
                        
                                <input type="hidden" id="datepick_value" value="08.09.2023" />
                                <div className="calendar__period">
                                    <p className="calendar__p date-end">Срок исполнения: <span className="date-control">{format(card?.date || new Date(), 'PP')}</span></p>
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
                    <div className="pop-browse__btn-edit">
                        <div className="btn-group">
                            <button className="btn-edit__edit _btn-bg _hover01" onClick={saveTask}><Link to={appRoutes.MAIN}>Сохранить</Link></button>
                            <button className="btn-edit__edit _btn-bor _hover03"><Link to={appRoutes.MAIN}>Отменить</Link></button>
                            <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete" onClick={deleteTask}><Link to={appRoutes.MAIN}>Удалить задачу</Link></button>
                        </div>
                        <button className="btn-browse__close _btn-bg _hover01" type="button"><Link to={appRoutes.MAIN}>Закрыть</Link></button>
                    </div>
                                            
                </div>
            </div>
        </div>
    </div>
    )
}
export default PopChangeCard