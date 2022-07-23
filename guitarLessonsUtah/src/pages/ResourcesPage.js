import SecHero from "./resourcesSections/SecHero";
import SecCalendar from "./resourcesSections/SecCalendar";
import SecMaterials from "./resourcesSections/SecMaterials";
import SecLinks from "./resourcesSections/SecLinks";
import SecContact from "./sections/SecContact";

const ResourcesPage = () => {
  return (
    <>
      <SecHero />
      {/* <SecResources /> */}
      {/* <SecCalendar /> */}
      {/* <SecMaterials /> */}
      {/* <SecLinks /> */}
      <SecContact mediumPage={true} />
    </>
  );
};

export default ResourcesPage;
