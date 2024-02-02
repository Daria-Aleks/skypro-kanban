import { PopExitBlock, PopExitContainer, PopExitDiv, PopExitForm, PopExitTtl } from "./PopExit.styled"

function PopExit(){
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
                    <button className="pop-exit__exit-yes _hover01" id="exitYes"><a href="modal/signin.html">Да, выйти</a> </button>
                    <button className="pop-exit__exit-no _hover03" id="exitNo"><a href="main.html">Нет, остаться</a> </button>
                </PopExitForm>
            </form>
        </PopExitBlock>
    </PopExitContainer>

    </div>
    </PopExitDiv>
    )
}
export default PopExit