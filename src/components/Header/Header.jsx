import { HeaderBlock, HeaderBtnNew, HeaderDiv, HeaderNav, HeaderPopUserSet, HeaderUser, PopUserSetMail, PopUserSetName, HeaderLogo } from "./Header.styled"
import { Container } from "../Common/Common.styled"
import { useState } from "react"
import { Link } from "react-router-dom"
import { appRoutes } from "../../lib/appRoutes"

function Header({userData}){

    const [isOpened, setIsOpened] = useState(false)
    function tooglePopUp(){
        setIsOpened((isOpened) => !isOpened)
    }
    return( 
    <HeaderDiv>
        <Container>
        <HeaderBlock>
            <HeaderLogo>
                <a href="" target="_self"><img src="images/logo.png" alt="logo" /></a>
            </HeaderLogo>
            <HeaderLogo>
                <a href="" target="_self"><img src="images/logo_dark.png" alt="logo" /></a>
            </HeaderLogo>
            <HeaderNav>
   
                <Link to={appRoutes.CREATE}>
                    <HeaderBtnNew>
                        Создать новую задачу
                    </HeaderBtnNew>
                </Link>
                <HeaderUser href="#user-set-target" onClick={tooglePopUp}>
                {userData}
                </HeaderUser>
                
                {isOpened && <HeaderPopUserSet>
                    <a href="">x</a> 
                    <PopUserSetName>
                    {userData}
                    </PopUserSetName>
                    <PopUserSetMail>
                    ivan.ivanov@gmail.com
                    </PopUserSetMail>
                    
                    <button type="button" className="_hover03"><Link to={appRoutes.EXIT}>Выйти</Link></button>
                </HeaderPopUserSet>
                }
            </HeaderNav>	    
        </HeaderBlock>
        
        </Container>	
    </HeaderDiv>
    )
}
export default Header