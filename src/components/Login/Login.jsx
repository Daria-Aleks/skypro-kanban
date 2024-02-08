import { ContainerSignIn, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalInput, ModalLogin, ModalTtl } from "./Login.styled";
import { Wrapper } from "../Common/Common.styled";
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { auth, getTodos } from "../../api";
function Login({setIsAuth}){
    const formFields = {
        login: "",
        passwd: "",
    };

    function authFunc() {
        auth(formData.login, formData.passwd)
            .then(responce => responce.user ? setIsAuth(true) : setIsAuth(false))
    }
    const [formData, setFormData] = useState(formFields);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        setFormData({
          ...formData, 
          [name]: value,
        });
    };

    return (
    <Wrapper>
        <ContainerSignIn>
        <Modal>
            <ModalBlock>
                <ModalTtl>
                    <h2>Вход</h2>
                </ModalTtl>
                <ModalLogin id="formLogIn">
                    <ModalInput 
                        type="text" 
                        id="formlogin" 
                        placeholder="Эл. почта" 
                        name="login"
                        value={formData.login}
                        onChange={handleInputChange}
                        >
                    </ModalInput>
                    <ModalInput 
                        type="password" 
                        name="passwd" 
                        id="formpassword" 
                        placeholder="Пароль"
                        value={formData.passwd}
                        onChange={handleInputChange}
                    >
                    </ModalInput>
                    <ModalBtnEnter id="btnEnter" type="button" onClick={authFunc}>
                    <Link to={appRoutes.MAIN}><p>Войти</p></Link>
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