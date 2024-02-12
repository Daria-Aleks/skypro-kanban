import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { DayPicker } from 'react-day-picker';
import { createTodo } from "../../api";
import { useState } from "react";
import 'react-day-picker/dist/style.css';
import { useTasksContext } from "../../contexts/tasks"
import { PopBrowse, PopBrowseContainer, PopBrowseBlockCreate, PopBrowseContent, PopBrowseTopBlock, PopBrowseTtl, StatusTheme, CategoriesTheme } from "./PopCreated.styled"

function PopCreateCard(){
    const formField = {
        text: "",
    }
    const [formData, setFormData] = useState(formField);
    const { cards, updateTasks } = useTasksContext();

    const handleInputChange = (e) => {
        const { value } = e.target;
      
        setFormData({
          ...formData, 
          text: value,
        });
    };

    function createTodoFunc() {
        createTodo(formData.text).then(responce => updateTasks(responce.todos))
    }
    return (
    <PopBrowse>
        <PopBrowseContainer>
            <PopBrowseBlockCreate>
                <PopBrowseContent>
                    <PopBrowseTopBlock>
                        <PopBrowseTtl>Создание задачи</PopBrowseTtl>
                    </PopBrowseTopBlock>
                    <div className="pop-browse__status status">
                        <p className="status__p subttl">Название задачи</p>
                        <div className="status__themes">
                            <input 
                                className="form-browse__input" 
                                name="text" id="textArea01" 
                                placeholder="Введите название задачи..."
                                value={formData.text}
                                onChange={handleInputChange}
                                >
                                </input>
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
                    </div>
                    <div className="pop-browse__btn-browse ">
                        <div className="btn-group flex">
                        <CategoriesTheme className="theme-top _orange _active-category">
                            <p className="_orange categories">Web Design</p>
                        </CategoriesTheme>
                        <CategoriesTheme className="theme-top _green _active-category">
                            <p className="_green categories">Research</p>
                        </CategoriesTheme>
                        <CategoriesTheme className=" theme-top _purple _active-category">
                            <p className="_purple categories">Copywriting</p>
                        </CategoriesTheme>
                        </div>
                        <button className="btn-browse__close _btn-bg _hover01" type="button" onClick={createTodoFunc}><Link to={appRoutes.MAIN}>Создать задачу</Link></button>
                    </div>
                                            
                </PopBrowseContent>
            </PopBrowseBlockCreate>
        </PopBrowseContainer>
    </PopBrowse>
    )
}
export default PopCreateCard