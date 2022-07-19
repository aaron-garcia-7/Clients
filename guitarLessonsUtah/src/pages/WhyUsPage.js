import SecHero from "./whyUsSections/SecHero";
import SecWhyUs from "./whyUsSections/SecWhyUs";
import SecBlog from "./whyUsSections/SecBlog";
import SecFaq from "./whyUsSections/SecFaq";
import SecTestimonials from "./sections/SecTestimonials";
import SecContact from "./sections/SecContact";

const WhyUsPage = () => {
  return (
    <>
      <SecHero />
      <SecWhyUs />
      <SecBlog />
      <SecFaq />
      <SecTestimonials />
      <SecContact inWhyUs={true} />
    </>
  );
};

export default WhyUsPage;
