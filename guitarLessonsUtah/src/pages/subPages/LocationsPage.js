import { Element } from "react-scroll";
import styled from "styled-components";
import Logo from "../../components/Logo";
import SecContact from "../sections/SecContact";
import SecSubBanner from "../sections/SecSubBanner";

const LocationsPage = () => {
  return (
    <StyledLocationsPage>
      <Element name="top" />
      <Logo />
      <SecSubBanner aboutLocations={true} />
      <SecContact />
    </StyledLocationsPage>
  );
};

const StyledLocationsPage = styled("div")``;

export default LocationsPage;
