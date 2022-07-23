import SecHero from "./sections/SecHero";
import SecSubHero from "./sections/SecSubHero";
import SecMark from "./aboutSections/SecMark";
import SecMaterials from "./resourcesSections/SecMaterials";
import SecLocations from "./aboutSections/SecLocations";
import SecTestimonials from "./sections/SecTestimonials";
import SecTestimonials2 from "./sections/SecTestimonials2";
import SecContact from "./sections/SecContact";

const HomePage = () => {
  return (
    <>
      <SecHero />
      <SecSubHero />
      <SecMark inHome={true} />
      <SecMaterials />
      <SecLocations inHome={true} />
      <SecTestimonials />
      {/* <SecTestimonials2 /> */}
      <SecContact longPage={true} />
    </>
  );
};

export default HomePage;
