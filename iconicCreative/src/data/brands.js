import brand1 from "../images/graphics/brand1.svg";
import brand2 from "../images/graphics/brand2.svg";
import brand3 from "../images/graphics/brand3.svg";
import brand4 from "../images/graphics/brand4.svg";
import brand5 from "../images/graphics/brand5.svg";
import brand6 from "../images/graphics/brand6.svg";
import brand7 from "../images/graphics/brand7.svg";

const brandList = [
  {
    name: "",
    img: null,
  },
  {
    name: "Briizy",
    img: brand1,
  },
  {
    name: "Vitality",
    img: brand2,
  },
  {
    name: "Sundek",
    img: brand3,
  },
  {
    name: "Enzy",
    img: brand4,
  },
  {
    name: "Stamina",
    img: brand5,
  },
  {
    name: "Affinity",
    img: brand6,
  },
  {
    name: "Bak'd",
    img: brand7,
  },
  {
    name: "",
    img: null,
  },
];

brandList.forEach((obj, index) => (obj.id = index));

export default brandList;
