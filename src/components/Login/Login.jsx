import { ContainerSignIn, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalInput, ModalLogin, ModalTtl } from "./Login.styled";
import { Wrapper } from "../Common/Common.styled";
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
function Login({setIsAuth}){
    function enter() {
        setIsAuth(true)
    }
    return (
    <Wrapper>
        <ContainerSignIn>
        <Modal>
            <ModalBlock>
                <ModalTtl>
                    <h2>Вход</h2>
                </ModalTtl>
                <ModalLogin id="formLogIn">
                    <ModalInput type="text" name="login" id="formlogin" placeholder="Эл. почта"></ModalInput>
                    <ModalInput type="password" name="password" id="formpassword" placeholder="Пароль"></ModalInput>
                    <ModalBtnEnter id="btnEnter" onClick={enter}>
                            <p>Войти</p>
                    </ModalBtnEnter>
                    <ModalFormGroup>
                        <p>Нужно зарегистрироваться?</p>
                        <Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link>
                    </ModalFormGroup>
                </ModalLogin>
            </ModalBlock>
        </Modal>
        </ContainerSignIn>
    </Wrapper>
)
}

export default Login;