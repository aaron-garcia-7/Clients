import physical from "../images/graphics/physical.svg";
import intellectual from "../images/graphics/intellectual.svg";
import emotional from "../images/graphics/emotional.svg";

const cardData = [
  {
    title: "Physical",
    img: physical,
  },
  {
    title: "Intellectual",
    img: intellectual,
  },
  {
    title: "Emotional",
    img: emotional,
  },
];

cardData.forEach((obj, index) => (obj.id = index + 1));

export default cardData;
