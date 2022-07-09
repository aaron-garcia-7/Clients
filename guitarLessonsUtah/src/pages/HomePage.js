import SecAbout from "./sections/SecAbout";
import SecContact from "./sections/SecContact";
import SecLessonMats from "./sections/SecLessonMats";
import SecHero from "./sections/SecHero";
import SecLocations from "./sections/SecLocations";
import SecSubHero from "./sections/SecSubHero";
import SecTestimonials from "./sections/SecTestimonials";
import SecTestimonials2 from "./sections/SecTestimonials2";

const HomePage = () => {
  return (
    <>
      <SecHero />
      <SecSubHero />
      <SecAbout />
      <SecLessonMats />
      <SecLocations />
      <SecTestimonials />
      {/* <SecTestimonials2 /> */}
      <SecContact />
    </>
  );
};

export default HomePage;
