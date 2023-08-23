import { Container } from "./LegendCard.styles";

interface ICard {
  title: string;
  labelContent: any;
}

export function LegendCard({ title, labelContent }: ICard) {
  return (
    <Container>
      <div className="title-card">
        <span>{title}</span>
      </div>

      <div className="card-content">
        {labelContent.map((content: any, key: any) => (
          <div className="item-card" key={key}>
            <img src={content.image} alt="" />
            <span>{content.description}</span>
          </div>
        ))}
      </div>
    </Container>
  );
}
