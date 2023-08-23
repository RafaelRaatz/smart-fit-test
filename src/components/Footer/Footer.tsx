import { Container } from "./Footer.styles";
import FooterImage from "../../assets/logo.svg";

export function Footer() {
  return (
    <Container>
      <div className="footer">
        <img src={FooterImage} alt="" />
        <span>Todos os direitos reservados - 2020</span>
      </div>
    </Container>
  );
}
