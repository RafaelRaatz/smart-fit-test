import { Container } from "./Legend.styles";
import { LegendCard } from "../LegendCard";
import { infoLabel } from "./legend.const";

export function Legend() {
  return (
    <Container>
      {infoLabel.map((label, key) => (
        <LegendCard key={key} title={label.title} labelContent={label.labels} />
      ))}
    </Container>
  );
}
