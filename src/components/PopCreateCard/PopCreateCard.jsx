import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { DayPicker } from 'react-day-picker';
import { createTodo } from "../../api";
import { useState } from "react";
import 'react-day-picker/dist/style.css';
import { PopBrowsee, PopBrowseContainer, PopBrowseBlockCreate, PopBrowseContent, PopBrowseTopBlock, PopBrowseTtl, Status, PopBrowseWrapCreate, Subttl, PopBrowseBtnBrowse, BtnGroup, BtnBg, PDate, SubttlWrapp, SubttlD } from "./PopCreated.styled";
import { format } from "date-fns";
import { getTodos } from "../../api";
import { useTasks } from "../../hooks/useTasks";
import { CardThemeDesk, CardThemeTextDesk } from "../Card/Card.styled";
function PopCreateCard(){
    const [selected, setSelected] = useState();
    let footer = <PDate>Please pick a day.</PDate>;
    if (selected) {
      footer = <PDate>You picked {format(selected, 'PP')}.</PDate>;
    }
    const [activeStatus, setActiveStatus] = useState(null)
    const css = `
    .rdp {
        --rdp-cell-size: 30px;
        color: gray; 
    }
    .rdp-cell {
        font-size: 13px
    }
  `;
    const formField = {
        title: "",
        topic: "",
        status: "Без статуса",
        description: "Подробное описание задачи",
        date: "",

    }
    const [formData, setFormData] = useState(formField);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
      
        setFormData({
          ...formData, 
          [name]: value,
        });
    };

    
    const handleClickChange = (value) => {
      
        setFormData({
          ...formData, 
        'topic': value,
        });
        setActiveStatus(value)
    };

    const {getCards} = useTasks()

    const createTodoFunc = async() => {
        let newCard = {
            ...formData, date: selected
        }
        await createTodo(newCard)
        getTodos()
            .then((data) => {
                getCards(data.tasks)
            })
    }
    return (
    <PopBrowsee>
        <PopBrowseContainer>
            <PopBrowseBlockCreate>
                <PopBrowseContent>
                    <PopBrowseTopBlock>
                        <PopBrowseTtl>Создание задачи</PopBrowseTtl>
                    </PopBrowseTopBlock>
                    <Status>
                        <p className="status__p subttl">Название задачи</p>
                        <div className="status__themes">
                            <input 
                                className="form-browse__input" 
                                name="title" id="textArea01" 
                                placeholder="Введите название задачи..."
                                value={formData.text}
                                onChange={handleInputChange}
                                >
                                </input>
                        </div>
                    </Status>
                    <PopBrowseWrapCreate>
                        <form className="pop-browse__form form-browse" id="formBrowseCard" action="#">									
                            <div className="form-browse__block">
                                <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                                <textarea 
                                    className="form-browse__area-create" 
                                    name="description" id="textArea01" 
                                    onChange={handleInputChange}
                                    placeholder="Введите описание задачи..."></textarea>
                            </div>
                        </form>
                        <div className="pop-new-card__calendar calendar">
                            <SubttlD>Даты</SubttlD>
                            <div className="calendar__block">
                                <div className="calendar__content">
                                <style>{css}</style>
                                  <DayPicker 
                                  mode="single"
                                  selected={selected}
                                  onSelect={setSelected}
                                  footer={footer}                            
                                  />
                                </div>
                            </div>
                        </div>
                    </PopBrowseWrapCreate>
                    <div>
                        <Subttl>Категория</Subttl>
                    </div>
                    <SubttlWrapp></SubttlWrapp>
                    <PopBrowseBtnBrowse>
                        <BtnGroup>
                            <PopBrowseTopBlock>
                                <CardThemeDesk $themeColor={activeStatus == "Web Design" ? '_orange' : '_lOrange'} value="Web Design" name="topic" onClick={() => handleClickChange("Web Design")}>
                                    <CardThemeTextDesk >Web Design</CardThemeTextDesk>
                                </CardThemeDesk>

                                <CardThemeDesk $themeColor={activeStatus == "Research" ? '_green' : '_lGreen'} value="Research" name="topic" onClick={() => handleClickChange("Research")}>
                                    <CardThemeTextDesk >Research</CardThemeTextDesk>
                                </CardThemeDesk>

                                <CardThemeDesk $themeColor={activeStatus == "Copywriting" ? '_purple' : '_lPurple'} value="Copywriting" name="topic" onClick={() => handleClickChange("Copywriting")}>
                                    <CardThemeTextDesk>Copywriting</CardThemeTextDesk>
                                </CardThemeDesk>
                            </PopBrowseTopBlock>
                        </BtnGroup>
                        <BtnBg type="button" onClick={createTodoFunc}><Link to={appRoutes.MAIN}>Создать задачу</Link></BtnBg>
                    </PopBrowseBtnBrowse>
                                            
                </PopBrowseContent>
            </PopBrowseBlockCreate>
        </PopBrowseContainer>
    </PopBrowsee>
    )
}
export default PopCreateCard