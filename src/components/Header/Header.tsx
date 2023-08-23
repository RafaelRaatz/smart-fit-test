import { Container } from "./Header.styles";
import LogoImage from "../../assets/logo.svg";

export function Header() {
  return (
    <Container>
      <div className="header-content">
        <img src={LogoImage} alt="logo" />
      </div>
    </Container>
  );
}
