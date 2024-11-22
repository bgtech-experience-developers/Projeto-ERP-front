
import { useNavigate } from "react-router-dom";
import { Logo } from "../Logo";
import ImgLogo from "../../assets/logo.svg";
import { Navbar } from "../Navbar";
import { StyledSidebar } from "./style";

export const Sidebar = () => {
    const navigate = useNavigate();

    const logout = () => {
        navigate('/');
    }

    return (
        <>
            <StyledSidebar>
                <Logo img={ImgLogo} alt="Imagem logo da empresa AFK" />
                <Navbar />
            </StyledSidebar>
        </>
    )
}
