import { Container } from "./ListCard.styles";
import PartialFontainImage from "../../assets/partial-fountain.png";
import ForbiddenFountainImage from "../../assets/forbidden-fountain.png";

import RequiredMaskImage from "../../assets/required-mask.png";
import RecommendedMaskImage from "../../assets/recommended-mask.png";

import RequiredTowelImage from "../../assets/required-towel.png";
import recommendedTowelImage from "../../assets/recommended-towel.png";

import RequiredLockrroomImage from "../../assets/required-lockerroom.png";
import ForbiddenLockrroomImage from "../../assets/forbidden-lockerroom.png";
import PartialLockrroomImage from "../../assets/partial-lockerroom.png";

interface ICard {
  opened: boolean;
  title: string;
  adress: string;
  mask: string;
  towel: string;
  fountain: string;
  locker: string;
  schedules: any;
}

export const ListCard = ({
  opened,
  title,
  adress,
  mask,
  towel,
  fountain,
  locker,
  schedules,
}: ICard) => {
  const renderLockerroom = (locker: any) => {
    if (locker === "allowed") {
      return <img src={RequiredLockrroomImage} />;
    } else if (locker === "closed") {
      return <img src={ForbiddenLockrroomImage} />;
    } else {
      return <img src={PartialLockrroomImage} />;
    }
  };
  return (
    <Container>
      <div className="card-adress">
        {opened ? (
          <span className="opened">Aberto</span>
        ) : (
          <span className="locked">Fechado</span>
        )}
        <h2>{title}</h2>

        <span className="adress">
          {adress
            .replace("<p>", "")
            .replace("<br>", " ")
            .replace("&#8211;", "")
            .replace("</p>", "")}
        </span>
      </div>
      <div className="legend-card">
        {mask == "required" ? (
          <img src={RequiredMaskImage} />
        ) : (
          <img src={RecommendedMaskImage} />
        )}
        {towel == "required" ? (
          <img src={RequiredTowelImage} />
        ) : (
          <img src={recommendedTowelImage} />
        )}
        {fountain == "partial" ? (
          <img src={PartialFontainImage} />
        ) : (
          <img src={ForbiddenFountainImage} />
        )}
        {renderLockerroom(locker)}
      </div>

      <div className="card-info">
        {schedules?.map((schedule: any) => (
          <div className="info">
            <h2>{schedule?.weekdays}</h2>
            <span>{schedule?.hour}</span>
          </div>
        ))}
      </div>
    </Container>
  );
};
