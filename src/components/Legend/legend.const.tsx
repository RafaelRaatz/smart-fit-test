import RequiredMaskImage from "../../assets/required-mask.png";
import RecommendedMaskImage from "../../assets/recommended-mask.png";

import RequiredTowelImage from "../../assets/required-towel.png";
import recommendedTowelImage from "../../assets/recommended-towel.png";

import PartialFontainImage from "../../assets/partial-fountain.png";
import ForbiddenFountainImage from "../../assets/forbidden-fountain.png";

import RequiredLockrroomImage from "../../assets/required-lockerroom.png";
import ForbiddenLockrroomImage from "../../assets/forbidden-lockerroom.png";
import PartialLockrroomImage from "../../assets/partial-lockerroom.png";

export const infoLabel = [
  {
    title: "Máscara",
    labels: [
      {
        image: `${RequiredMaskImage}`,
        description: "obrigatório",
      },
      {
        image: `${RecommendedMaskImage}`,
        description: "Recomendado",
      },
    ],
  },

  {
    title: "Toalha",
    labels: [
      {
        image: `${RequiredTowelImage}`,
        description: "obrigatório",
      },
      {
        image: `${recommendedTowelImage}`,
        description: "Recomendado",
      },
    ],
  },

  {
    title: "Bebebouro",
    labels: [
      {
        image: `${PartialFontainImage}`,
        description: "Parcial",
      },
      {
        image: `${ForbiddenFountainImage}`,
        description: "Proibido",
      },
    ],
  },

  {
    title: "Vestiario",
    labels: [
      {
        image: `${RequiredLockrroomImage}`,
        description: "Liberado",
      },
      {
        image: `${PartialLockrroomImage}`,
        description: "Parcial",
      },
      {
        image: `${ForbiddenLockrroomImage}`,
        description: "Proibido",
      },
    ],
  },
];
