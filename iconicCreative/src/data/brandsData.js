import brand1 from "../images/graphics/brand1.svg";
import brand2 from "../images/graphics/brand2.svg";
import brand3 from "../images/graphics/brand3.svg";
import brand4 from "../images/graphics/brand4.svg";
import brand5 from "../images/graphics/brand5.svg";
import brand6 from "../images/graphics/brand6.svg";
import brand7 from "../images/graphics/brand7.svg";

const brandData = [
  {
    name: "",
    img: null,
  },
  {
    name: "Briizy",
    img: brand1,
    img2: null,
  },
  {
    name: "Vitality",
    img: brand2,
    img2: null,
  },
  {
    name: "Sundek",
    img: brand3,
    img2: null,
  },
  {
    name: "Enzy",
    img: brand4,
    img2: null,
  },
  {
    name: "Stamina",
    img: brand5,
    img2: null,
  },
  {
    name: "Affinity",
    img: brand6,
    img2: null,
  },
  {
    name: "Bak'd",
    img: brand7,
    img2: null,
  },
  {
    name: "",
    img: null,
  },
];

brandData.forEach((obj, index) => (obj.id = index));

export default brandData;
