import { Wrapper } from "../Common/Common.styled";
import { ModalFormGroup, ModalInput, ModalLogin } from "../Login/Login.styled";
import { ContainerSignUp, ModalBlockTtlUp, ModalBtnSignUp, SignUpModal, SignUpModalBlock } from "./Register.styled";
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useState } from "react";
import { create } from "../../api";
function Register (){
    const formFields = {
        login: "",
        passwd: "",
        name: "",
    };

    function createUser() {
        create(formData.name, formData.login, formData.passwd)
    }
    const [formData, setFormData] = useState(formFields);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
      
        setFormData({
          ...formData, 
          [name]: value,
        });
    };
    return(
        <Wrapper>
            <ContainerSignUp>
                <SignUpModal>
                    <SignUpModalBlock>
                        <ModalBlockTtlUp>
                        <h2>Регистрация</h2>
                        </ModalBlockTtlUp>
                    <ModalLogin id="formLogUp" action="#">
                        <ModalInput 
                            type="text" 
                            name="name" 
                            id="first-name" 
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Имя"></ModalInput>
                        <ModalInput 
                            type="text" 
                            name="login" 
                            id="loginReg" 
                            value={formData.login}
                            onChange={handleInputChange}
                            placeholder="Эл. почта"></ModalInput>
                        <ModalInput 
                            type="password" 
                            name="passwd" 
                            id="passwordFirst" 
                            value={formData.passwd}
                            onChange={handleInputChange}
                            placeholder="Пароль"></ModalInput>
                        <ModalBtnSignUp type="button" onClick={createUser}>
                            <a>Зарегистрироваться</a>
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