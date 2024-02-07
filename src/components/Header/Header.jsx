import { HeaderBlock, HeaderBtnNew, HeaderDiv, HeaderNav, HeaderPopUserSet, HeaderUser, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./Header.styled"
import { Container } from "../Common/Common.styled"
import { useState } from "react"
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
function Header({addCard}){
    const [isOpened, setIsOpened] = useState(false)
    function tooglePopUp(){
        setIsOpened((isOpened) => !isOpened)
    }
    return( 
    <HeaderDiv>
        <Container>
        <HeaderBlock>
            <div className="header__logo _show _light">
                <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
            </div>
            <div className="header__logo _dark">
                <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
            </div>
            <HeaderNav>
            <nav>
                <HeaderBtnNew onClick={addCard}>
                    Создать новую задачу
                </HeaderBtnNew>
                <HeaderUser href="#user-set-target" onClick={tooglePopUp}>
                Ivan Ivanov
                </HeaderUser>
                {isOpened && <HeaderPopUserSet>
                    <a href="">x</a> 
                    <PopUserSetName>
                    Ivan Ivanov
                    </PopUserSetName>
                    <PopUserSetMail>
                    ivan.ivanov@gmail.com
                    </PopUserSetMail>
                    <PopUserSetTheme>
                        <p>Темная тема</p>
                        <input type="checkbox" className="checkbox" name="checkbox" />
                    </PopUserSetTheme>
                    
                    <button type="button" className="_hover03"><Link to={appRoutes.EXIT}>Выйти</Link></button>
                </HeaderPopUserSet>
                }
            </nav>	 
            </HeaderNav>	    
        </HeaderBlock>
        
        </Container>	
    </HeaderDiv>
    )
}
export default Header