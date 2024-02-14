import { PopExitBlock, PopExitContainer, PopExitDiv, PopExitForm, PopExitTtl } from "./PopExit.styled"
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useUser } from "../../hooks/useUser"

function PopExit({setIsAuth}){
    const {logoutUser} = useUser()

    function exit() {
        logoutUser()
    }
    return (
    <PopExitDiv>
    <div id="popExit">
    <PopExitContainer>
        <PopExitBlock>
            <PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
            <form className="pop-exit__form" id="formExit" action="#">
                <PopExitForm>
                    <button className="pop-exit__exit-yes _hover01" id="exitYes" onClick={exit}><Link to={appRoutes.LOGIN}>Да, выйти</Link></button>
                    <button className="pop-exit__exit-no _hover03" id="exitNo"><Link to={appRoutes.MAIN}>Нет, остаться</Link></button>
                </PopExitForm>
            </form>
        </PopExitBlock>
    </PopExitContainer>

    </div>
    </PopExitDiv>
    )
}
export default PopExit