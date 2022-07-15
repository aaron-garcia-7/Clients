import { Element } from "react-scroll";
import styled from "styled-components";
import Logo from "../../components/Logo";
import SecContact from "../sections/SecContact";
import SecSubBanner from "../sections/SecSubBanner";

const PoliciesPage = () => {
  return (
    <StyledPoliciesPage>
      <Element name="top" />
      <Logo />
      <SecSubBanner aboutPolicies={true} />
      <SecContact />
    </StyledPoliciesPage>
  );
};

const StyledPoliciesPage = styled("div")``;

export default PoliciesPage;
