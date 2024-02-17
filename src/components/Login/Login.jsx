import { ContainerSignIn, Modal, ModalBlock, ModalBtnEnter, ModalFormGroup, ModalInput, ModalLogin, ModalTtl, NotCorrect, RegHere } from "./Login.styled";
import { Wrapper } from "../Common/Common.styled";
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { auth } from "../../api";
import { useUser } from "../../hooks/useUser";
function Login(){

    const formFields = {
        login: "",
        passwd: "",
    };

    const [correct, setCorrect] = useState(true)

    const {loginUser} = useUser();
    function authFunc() {
        auth(formData.login, formData.passwd)
            .then(responce => responce.user ? enter(responce.user) : setCorrect(false))
    }

    function enter(user) {
        loginUser(user)
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
                        style={{'outline': correct? 'none' : '1px solid orange'}}
                        value={formData.login}
                        onChange={handleInputChange}
                        >
                    </ModalInput>
                    <ModalInput 
                        type="password" 
                        name="passwd" 
                        id="formpassword" 
                        placeholder="Пароль"
                        style={{'outline': correct? 'none' : '1px solid orange'}}
                        value={formData.passwd}
                        onChange={handleInputChange}
                    >
                    </ModalInput>
                    {
                        !correct ? 
                        <NotCorrect>
                            Введенные вами данные не распознаны
                        </NotCorrect> : ''
                    }
                    <ModalBtnEnter id="btnEnter" type="button" onClick={authFunc} disabled={!correct} style={{'background': !correct ?'gray' : ''}}>
                    <Link to={appRoutes.MAIN}><p style={{'color': !correct ?'white' : ''}}>Войти</p></Link>
                    </ModalBtnEnter>
                    <ModalFormGroup>
                        <p>Нужно зарегистрироваться?</p>
                       <RegHere $themeColor="flex"><Link to={appRoutes.REGISTER}>Регистрируйтесь здесь</Link></RegHere>
                    </ModalFormGroup>
                </ModalLogin>
            </ModalBlock>
        </Modal>
        </ContainerSignIn>
    </Wrapper>
)
}

export default Login;