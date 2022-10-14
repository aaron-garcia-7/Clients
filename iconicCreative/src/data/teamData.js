import portrait1 from "../images/photos/portrait1.png";
import portrait2 from "../images/photos/portrait2.png";
import portrait3 from "../images/photos/portrait3.png";
import portrait4 from "../images/photos/portrait4.png";

const teamData = [
  {
    name: "Sarah Simonsen",
    img: portrait1,
    title: "Marketing Director",
    title2: "CoFounder",
  },
  {
    name: "Daniel Garcia",
    img: portrait2,
    title: "Creative Director",
    title2: "CoFounder",
  },
  {
    name: "Coleton Simonsen",
    img: portrait3,
    title: "Director of Sales",
    title2: "",
  },
  {
    name: "Aaron Garcia",
    img: portrait4,
    title: "Web Developer",
    title2: "",
  },
];

teamData.forEach((obj, index) => (obj.id = index));

export default teamData;
