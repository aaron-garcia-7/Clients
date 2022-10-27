import React from "react";
import ScrollToTop from "../router/ScrollToTop";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";

import Nav from "../components/Nav";
import PageBanner from "../components/PageBanner";
import ServiceCard from "../components/ServiceCard";

import service1 from "../images/photos/service1.png";
import service2 from "../images/photos/service2.png";
import service3 from "../images/photos/service3.png";
import service4 from "../images/photos/service4.png";
import service5 from "../images/photos/service5.png";
import service6 from "../images/photos/service6.png";
import service6Mobile from "../images/photos/service6Mobile.png";

function Services({ pageWidth, navOpen, setNavOpen }) {
  const [ref, inView] = useInView({
    threshold:
      pageWidth >= 1440 ? 0.5 : pageWidth < 1440 && pageWidth > 768 ? 0.3 : 0.2,
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    threshold:
      pageWidth >= 1440 ? 0.5 : pageWidth < 1440 && pageWidth > 768 ? 0.3 : 0.2,
    triggerOnce: true,
  });
  const [ref3, inView3] = useInView({
    threshold:
      pageWidth >= 1440 ? 0.5 : pageWidth < 1440 && pageWidth > 768 ? 0.3 : 0.2,
    triggerOnce: true,
  });

  return (
    <ScServices
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} />
      <PageBanner title={"Services"} />
      <main>
        <div className="serviceBlock" ref={ref}>
          <h3 className={inView ? "show" : ""}>Branding</h3>
          <div className="cards">
            <ServiceCard
              id={1}
              order={1}
              title={"Brand Design"}
              img={service2}
              price={"7,000"}
              text1={"2 Logo Options"}
              text2={"Fonts"}
              text3={"Mockups Exampls"}
              text4={"Colors"}
              text5={"Brand Guidelines"}
              text6={"Mission Statement"}
              inView={inView}
            />
            <ServiceCard
              id={2}
              order={2}
              title={"Product Design"}
              img={service5}
              price={"3,250"}
              text1={""}
              text2={"3 Package Options"}
              text3={""}
              text4={""}
              text5={"2 Product Options"}
              text6={""}
              inView={inView}
            />
          </div>
        </div>
        <div className="serviceBlock" ref={ref2}>
          <h3 className={inView2 ? "show" : ""}>Website / App Design</h3>
          <div className="cards">
            <ServiceCard
              id={3}
              order={1}
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
              inView={inView2}
            />
            <ServiceCard
              id={4}
              order={2}
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
              inView={inView2}
            />
          </div>
        </div>
        <div className="serviceBlock" ref={ref3}>
          <h3 className={inView3 ? "show" : ""}>Social Media</h3>
          <div className="cards">
            <ServiceCard
              id={5}
              order={1}
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
              inView={inView3}
            />
            <ServiceCard
              id={6}
              order={2}
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
              inView={inView3}
            />
          </div>
        </div>
      </main>
    </ScServices>
  );
}

const ScServices = styled(motion.div)`
  main {
    padding-bottom: 6vw;
    background: var(--light);
    z-index: 1;
    .serviceBlock {
      /* border: 2px dashed coral; */
      padding: 4rem 6%;
      h3 {
        /* border: 1px solid black; */
        font-size: calc(2rem + 2vw);
        font-weight: 400;
        margin-bottom: 6vw;
        /* height: 5.6rem; */
        height: calc(2rem + 4vw);
        overflow: hidden;
        padding-top: 6rem;
        transition: padding 0.6s ease;
      }
      .show {
        padding-top: 0rem;
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
        padding: 1rem 6% 0 6%;
        &:nth-of-type(1) {
          padding: 6rem 6% 0 6%;
        }
        h3 {
          font-size: calc(1rem + 3.6vw);
          margin-bottom: 6rem;
        }
      }
    }
  }
`;

export default Services;
