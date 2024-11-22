import { StyledIconLogo, StyledLogo } from "./style";

export const Logo = ({ img }) => {
    const LogoReload = () => {
        window.location.reload();
    }
    return (
        <>
            <StyledLogo>
                <StyledIconLogo onClick={LogoReload} src={img} />
            </StyledLogo>
        </>
    )
};
