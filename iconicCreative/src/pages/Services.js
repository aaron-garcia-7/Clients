import React from "react";
import ScrollToTop from "../router/ScrollToTop";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";
import service1 from "../images/photos/service1.png";
import service2 from "../images/photos/service2.png";
import service3 from "../images/photos/service3.png";
import service4 from "../images/photos/service4.png";
import service5 from "../images/photos/service5.png";
import service6 from "../images/photos/service6.png";
import service6Mobile from "../images/photos/service6Mobile.png";

import PageBanner from "../components/PageBanner";
import ServiceCard from "../components/ServiceCard";

function Services({ pageWidth }) {
  return (
    <ScServices
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <PageBanner title={"Services"} />
      <main>
        <div className="serviceBlock">
          <h3>Branding</h3>
          <div className="cards">
            <ServiceCard
              title={"Brand Design"}
              img={service2}
              price={"7,000"}
              text1={"2 Logo Options"}
              text2={"Fonts"}
              text3={"Mockups Exampls"}
              text4={"Colors"}
              text5={"Brand Guidelines"}
              text6={"Mission Statement"}
            />
            <ServiceCard
              title={"Product Design"}
              img={service5}
              price={"3,250"}
              text1={""}
              text2={"3 Package Options"}
              text3={""}
              text4={""}
              text5={"2 Product Options"}
              text6={""}
            />
          </div>
        </div>
        <div className="serviceBlock">
          <h3>Website / App Design</h3>
          <div className="cards">
            <ServiceCard
              title={"Website Design + Development"}
              img={pageWidth > 520 ? service6 : service6Mobile}
              price={"9,000"}
              text1={"Ecommerce"}
              text2={"Contact Forms"}
              text3={"Blog"}
              text4={"Navigation"}
              text5={"Pop Ups"}
              text6={""}
              before={"Design"}
            />
            <ServiceCard
              title={"App Design + Development"}
              img={service1}
              price={"8,000"}
              text1={"Ecommerce"}
              text2={"Website Integration"}
              // text3={"Mockups Exampls"}
              text4={"Navigation"}
              text5={"Blog"}
              // text6={"Mission Statement"}
              before={"Design"}
            />
          </div>
        </div>
        <div className="serviceBlock">
          <h3>Social Media</h3>
          <div className="cards">
            <ServiceCard
              title={"Weekly Social Package"}
              img={service4}
              price={"4,000"}
              text1={"5 posts / week"}
              text2={"20 / month"}
              // text3={"Mockups Exampls"}
              text4={"3 month min"}
              // text5={"Brand Guidelines"}
              // text6={"Mission Statement"}
              after={"/Per month"}
            />
            <ServiceCard
              title={"Video Thumbnail Package"}
              img={service3}
              price={"6,000"}
              text1={"5 posts / week"}
              text2={"20 / month"}
              // text3={"Mockups Exampls"}
              text4={"3 month min"}
              // text5={"Brand Guidelines"}
              // text6={"Mission Statement"}
              after={"/Per month"}
            />
          </div>
        </div>
      </main>
    </ScServices>
  );
}

const ScServices = styled(motion.div)`
  background: var(--light);
  main {
    padding-bottom: 6vw;
    .serviceBlock {
      padding: 4rem 6%;
      h3 {
        font-size: calc(2rem + 2vw);
        font-weight: 400;
        margin-bottom: 6vw;
      }
      .cards {
        display: flex;
        justify-content: space-between;
      }
    }
  }

  @media (max-width: 1024px) {
    main {
      .serviceBlock {
        h3 {
          margin-bottom: 12vw;
        }
        .cards {
          flex-direction: column;
        }
      }
    }
  }

  @media (max-width: 520px) {
    main {
      .serviceBlock {
        padding: 4rem 6% 0 6%;
        h3 {
          font-size: calc(1rem + 3.6vw);
          margin-bottom: 8rem;
        }
      }
    }
  }
`;

export default Services;
