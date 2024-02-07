import { ContainerSignIn, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalInput, ModalLogin, ModalTtl } from "./Login.styled";
import { Wrapper } from "../Common/Common.styled";

function Login(){
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
                    <ModalBtnEnter id="btnEnter">
                        <a href="../main.html">Войти</a>
                    </ModalBtnEnter>
                    <ModalFormGroup>
                        <p>Нужно зарегистрироваться?</p>
                        <a href="signup.html">Регистрируйтесь здесь</a>
                    </ModalFormGroup>
                </ModalLogin>
            </ModalBlock>
        </Modal>
        </ContainerSignIn>
    </Wrapper>
)
}

export default Login;