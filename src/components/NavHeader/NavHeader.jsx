import SearchBox from "../SearchBox/SearchBox";
import { WrapperNavHeader, ContentNav, Icon } from "./style";
import Logo from '../../assets/img/logo-meli.png'
import { useHistory } from "react-router-dom";

const NavHeader = (props) => {
    const history = useHistory();
    return (
        <WrapperNavHeader>
            <ContentNav>
                <Icon onClick={() => { history.push("/") }} title="Mercado libre">
                    <img src={Logo} alt="Mercado libre" width="50" />
                </Icon>
                <SearchBox />
            </ContentNav>
        </WrapperNavHeader>
    )

}


export default NavHeader;