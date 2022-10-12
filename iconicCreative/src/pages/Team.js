import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";

import PageBanner from "../components/PageBanner";

function Team() {
  return (
    <ScTeam variants={pageAnim} initial="initial" animate="animate" exit="exit">
      <PageBanner title={"Team"} />
    </ScTeam>
  );
}

const ScTeam = styled(motion.div)`
  background: var(--light);
`;

export default Team;
