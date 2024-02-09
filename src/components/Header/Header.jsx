import { HeaderBlock, HeaderBtnNew, HeaderDiv, HeaderNav, HeaderPopUserSet, HeaderUser, PopUserSetMail, PopUserSetName, PopUserSetTheme } from "./Header.styled"
import { Container } from "../Common/Common.styled"
import { useState } from "react"
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"
import { useUserContext } from "../../contexts/user"
function Header({addCard}){
    const user = useUserContext();

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
                <Link to={appRoutes.CREATE}>
                    <HeaderBtnNew>
                        Создать новую задачу
                    </HeaderBtnNew>
                </Link>
                <HeaderUser href="#user-set-target" onClick={tooglePopUp}>
                {user}
                </HeaderUser>
                {isOpened && <HeaderPopUserSet>
                    <a href="">x</a> 
                    <PopUserSetName>
                    {user}
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