import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { DayPicker } from 'react-day-picker';
import { createTodo } from "../../api";
import { useState } from "react";
import 'react-day-picker/dist/style.css';

function PopCreateCard(){
    const formField = {
        text: "",
    }
    const [formData, setFormData] = useState(formField);
    const handleInputChange = (e) => {
        const { value } = e.target;
      
        setFormData({
          ...formData, 
          text: value,
        });
    };

    function createTodoFunc() {
        createTodo(formData.text)
    }
    return (
    <div className="pop-browse" id="popBrowse">
        <div className="pop-browse__container">
            <div className="pop-browse__block-create">
                <div className="pop-browse__content">
                    <div className="pop-browse__top-block">
                        <h3 className="pop-browse__ttl">Создание задачи</h3>
                    </div>
                    <div className="pop-browse__status status">
                        <p className="status__p subttl">Название задачи</p>
                        <div className="status__themes">
                            <div className="status__theme _hide">
                            </div>
                            <input 
                                className="form-browse__input" 
                                name="text" id="textArea01" 
                                placeholder="Введите название задачи..."
                                value={formData.text}
                                onChange={handleInputChange}
                                >
                                </input>

                            <div className="status__theme _hide">
                                <p>В работе</p>
                            </div>
                            <div className="status__theme _hide">
                                <p>Тестирование</p>
                            </div>
                            <div className="status__theme _hide">
                                <p>Готово</p>
                            </div>
                        </div>
                    </div>
                    <div className="pop-browse__wrap-create">
                        <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
                            <div className="form-browse__block">
                                <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                <textarea className="form-browse__area-create" name="text" id="textArea01" placeholder="Введите описание задачи..."></textarea>
                            </div>
                        </form>
                        <div className="pop-new-card__calendar calendar">
                            <p className="calendar__ttl subttl">Даты</p>
                            <div className="calendar__block">
                                <div className="calendar__content">
                                  <DayPicker mode="single"/>
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
                        <div className="btn-group flex">
                        <div className="categories__theme theme-top _orange _active-category">
                            <p className="_orange">Web Design</p>
                        </div>
                        <div className="categories__theme theme-top _green _active-category">
                            <p className="_green">Research</p>
                        </div>
                        <div className="categories__theme theme-top _purple _active-category">
                            <p className="_purple">Copywriting</p>
                        </div>
                        </div>
                        <button className="btn-browse__close _btn-bg _hover01" type="button" onClick={createTodoFunc}><Link to={appRoutes.MAIN}>Создать задачу</Link></button>
                    </div>
                    <div className="pop-browse__btn-edit _hide">
                        <div className="btn-group">
                            <button className="btn-edit__edit _btn-bg _hover01"><a href="#">Сохранить</a></button>
                            <button className="btn-edit__edit _btn-bor _hover03"><a href="#">Отменить</a></button>
                            <button className="btn-edit__delete _btn-bor _hover03" id="btnDelete"><a href="#">Удалить задачу</a></button>
                        </div>
                        <button className="btn-edit__close _btn-bg _hover01"><a href="#">Закрыть</a></button>
                    </div>
                                            
                </div>
            </div>
        </div>
    </div>
    )
}
export default PopCreateCard