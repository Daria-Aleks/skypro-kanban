import { PopExitBlock, PopExitContainer, PopExitDiv, PopExitForm, PopExitTtl } from "./PopExit.styled"
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useUser } from "../../hooks/useUser"
import { PopExitExitNo, PopExitExitYes } from "../PopCreateCard/PopCreated.styled"

function PopExit(){
    const {logoutUser} = useUser()

    function exit() {
        logoutUser()
    }
    return (
    <PopExitDiv>
    <div>
    <PopExitContainer>
        <PopExitBlock>
            <PopExitTtl>
                <h2>Выйти из аккаунта?</h2>
            </PopExitTtl>
            <form action="#">
                <PopExitForm>
                    <PopExitExitYes id="exitYes" onClick={exit}><Link to={appRoutes.LOGIN}>Да, выйти</Link></PopExitExitYes>
                    <PopExitExitNo id="exitNo"><Link to={appRoutes.MAIN}>Нет, остаться</Link></PopExitExitNo>
                </PopExitForm>
            </form>
        </PopExitBlock>
    </PopExitContainer>

    </div>
    </PopExitDiv>
    )
}
export default PopExit