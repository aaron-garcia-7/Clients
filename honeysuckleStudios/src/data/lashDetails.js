import classic from "../images/classic.png";
import hybrid from "../images/hybrid.png";
import volume from "../images/volume.png";

const lashDetails = [
  {
    type: "classic",
    img: classic,
    full: 85,
    fill: 50,
  },
  {
    type: "hybrid",
    img: hybrid,
    full: 95,
    fill: 60,
  },
  {
    type: "volume",
    img: volume,
    full: 110,
    fill: 70,
  },
];

lashDetails.forEach((obj, index) => (obj.id = index + 1));

export default lashDetails;
