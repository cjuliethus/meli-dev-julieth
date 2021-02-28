import NavHeader from "../NavHeader/NavHeader";
import { WrapperMainContainer, ContentContainer } from "./style";
import Logo from "../../assets/img/logo-meli.png";

const MainContainer = (props) => {
    return (
        <WrapperMainContainer>
            <NavHeader />
            <ContentContainer>
                {props.children || (
                    <div className="brand">
                        <img src={Logo} alt="Mercado Libre" />
                        <br />
                        ¡Hola somos Mercado libre
                        <br /> para empezar, comienza realizando una busqueda!
                    </div>
                )}
            </ContentContainer>
        </WrapperMainContainer>
    );
};

export default MainContainer;
