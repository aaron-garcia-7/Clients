import React from "react";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";

import PageBanner from "../components/PageBanner";

function OurWork() {
  return (
    <ScOurWork
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <PageBanner title={"Our Work"} />
    </ScOurWork>
  );
}

const ScOurWork = styled(motion.div)`
  background: var(--light);
`;

export default OurWork;
