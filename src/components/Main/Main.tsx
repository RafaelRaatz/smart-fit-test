import { List } from "../List";
import { Legend } from "../Legend";
import { Container } from "./Main.styles";
import { FilterTable } from "../FilterTable";


export function Main() {
  return (
    <Container>
      <div className="main-content">
        <div className="title">
          <h1>
            REABERTURA <br /> SMART FIT
          </h1>

          <div className="line"></div>
        </div>

        <p>
          O horário de funcionamento das nossas unidades está seguindo os
          decretos de cada município. Por isso, confira aqui se a sua unidade
          está aberta e as medidas de segurança que estamos seguindo.
        </p>

        <FilterTable />
        <Legend />
        <List />
      </div>
    </Container>
  );
}
