import { Wrapper } from "../Common/Common.styled";
import { ModalFormGroup, ModalInput, ModalLogin } from "../Login/Login.styled";
import { ContainerSignUp, ModalBlockTtlUp, ModalBtnSignUp, SignUpModal, SignUpModalBlock } from "./Register.styled";
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"

function Register (){
    return(
        <Wrapper>
            <ContainerSignUp>
                <SignUpModal>
                    <SignUpModalBlock>
                        <ModalBlockTtlUp>
                        <h2>Регистрация</h2>
                        </ModalBlockTtlUp>
                    <ModalLogin id="formLogUp" action="#">
                        <ModalInput type="text" name="first-name" id="first-name" placeholder="Имя"></ModalInput>
                        <ModalInput type="text" name="login" id="loginReg" placeholder="Эл. почта"></ModalInput>
                        <ModalInput type="password" name="password" id="passwordFirst" placeholder="Пароль"></ModalInput>
                        <ModalBtnSignUp>
                            <a href="../main.html">Зарегистрироваться</a>
                        </ModalBtnSignUp>
                        <ModalFormGroup>
                            <p>Уже есть аккаунт? <Link to={appRoutes.LOGIN}>Войдите здесь</Link></p>
                        </ModalFormGroup>
                    </ModalLogin>
                    </SignUpModalBlock>
                </SignUpModal>
            </ContainerSignUp>
        </Wrapper>
    )
}
export default Register;