import SecMark from "./aboutSections/SecMark";
import SecLocations from "./aboutSections/SecLocations";
import SecContact from "./sections/SecContact";
import SecHero from "./aboutSections/SecHero";
import SecPolicies from "./aboutSections/SecPolicies";

const AboutPage = () => {
  return (
    <>
      <SecHero />
      <SecMark inHome={false} />
      <SecPolicies />
      <SecLocations inHome={false} />
      <SecContact mediumPage={true} />
    </>
  );
};

export default AboutPage;
