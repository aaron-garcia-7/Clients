import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { Element } from "react-scroll";
import { motion, useAnimation } from "framer-motion";
import styled from "styled-components";
import {
  container,
  containerPoliciesArticle,
  fade,
  fadeUp,
} from "../../anim/animations";

import Logo from "../../components/Logo";
import SecContact from "../sections/SecContact";
import SecAboutSubHero from "../sections/SecAboutSubHero";

const PoliciesPage = () => {
  // Scroll Animations
  const control = useAnimation();
  const control2 = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  //Ref2
  const [ref2, inView2] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });
  useEffect(() => {
    inView ? control.start("animate") : control.start("initial");
    inView2 ? control2.start("animate") : control2.start("initial");
  }, [control, control2, inView, inView2]);

  return (
    <StyledPoliciesPage>
      <Element name="top" />
      <Logo />
      <SecAboutSubHero aboutPolicies={true} />
      <Element name="subContent" />
      <article className="policiesContent" ref={ref}>
        <motion.div
          className="articleHeader"
          variants={container}
          initial="initial"
          animate={control}
        >
          <motion.h2 variants={fade}>Mark Veldevere Guitar Studios</motion.h2>
          <motion.h4 variants={fade}>Lesson Agreement</motion.h4>
        </motion.div>
        <motion.div
          className="articleContent"
          variants={containerPoliciesArticle}
          initial="initial"
          animate={control}
        >
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">1.</span>I understand that I am reserving
            the instructor’s time and will pay for that time on a monthly basis.
            I do not give weekly lessons and lessons must be paid on a monthly
            basis at the first lesson of each month.
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">2.</span>
            If I need to cancel a lesson, I am expected to call the instructor
            at least 24 hours before the lesson. If I cannot make a lesson it is
            up to me to arrange a makeup lesson and must do so before the end of
            the month. Make-ups will not be carried over from month to month. If
            I need to cancel a lesson I will call the instructor at work where
            there is caller ID and an answering machine at all times. I realize
            that I must leave a message on the answering machine. If I do not
            call at least 24 hours in advance, except for sudden illness, I
            acknowledge that I am required to pay for that lesson. If the
            instructor has to miss a lesson I understand that my next months
            lessons will be prorated the necessary amount! I understand that I
            am paying for the instructor’s time and have reserved/scheduled this
            time slot on a weekly basis! If I need to take time off for a long
            period of time (i.e. a month) I understand that I must pay for that
            time, even though I am not attending the lessons, in order to keep
            that time slot otherwise it may be given to another student.
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">3.</span>
            Payment (of $85) is due on the first lesson of each month. I
            understand that if I fail to pay for lessons I can and/or will be
            billed for the amount due. I agree to pay a $5.00 late charge each
            week after the tenth of the month if it is late. Cash, and credit
            cards are accepted as a payment as are checks, but if a check does
            not clear the bank I recognize that I am responsible to pay the bank
            fee to the instructor and make arrangements for payments in the
            future!
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">4.</span>
            If I choose to discontinue my lessons I will:{" "}
            <span className="innerList">
              a. Finish the current month of lessons, unless other arrangements
              have been agreed upon by the instructor and I. There will be no
              refund of money!!
            </span>{" "}
            <span className="innerList">
              b. Notify the instructor (via personal phone call or in person) at
              least one week before my next month’s lessons. This enables the
              instructor to place new students in the time slot I vacate.
              Otherwise I understand that I have reserved the instructor’s time
              and that I am responsible for the payment of that time.{" "}
            </span>
            <span className="innerList">
              c. Failure to pay for current months lessons, and/or notify
              instructor of discontinuance, as per above, I understand that I
              will be billed a weekly balance until notification to instructor
              has occurred…after all I am still there waiting for you!
            </span>
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">5.</span>I understand that it is up to me
            to practice on a daily basis for approximately ½+ hour every day at
            least. Failure to do so results in a failure to improve. The more
            you practice the better you will become and the more fun you will
            have! I understand that if I do not practice that I can be dropped
            any time as a student. This will save my parents and I a lot of
            money and the instructor’s time.
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">6.</span>I understand I am to be on time. I
            have reserved 30 minutes of time (5 minutes of that is for getting
            ready for the lesson and for packing up after the lesson). If I am
            late ten minutes the instructor will ascertain that you are not
            coming and will count it as a missed lesson…and go get a burger!
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">7.</span>I understand there are times when
            the instructor will lend me materials for which I am responsible. I
            understand that if I lose them or damage them that I will be
            required to replace them at full market value. I also understand
            that if I stop taking lessons that I must return all borrowed
            materials to the instructor or pay for them (what it would cost to
            replace them)! I understand that I will be billed for all unreturned
            materials!
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">8.</span>
            On January 1st of each year the cost of lessons will increase five
            dollars to accommodate the increase in cost due to the rising prices
            of studio rent, etc!
          </motion.p>
          <motion.p
            className="paragraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            <span className="number">9.</span>
            If you have any questions you are welcome to call me anytime at on
            my cell phone or at work. My phone numbers are as follows:
            Work-947-9072; Cell-635-6588.
          </motion.p>
          <div className="refMarker" ref={ref2} />
        </motion.div>
        <motion.div
          className="noticeHeader"
          variants={container}
          initial="initial"
          animate={control2}
        >
          <motion.h2 variants={fade}>Illness Notice</motion.h2>
          <motion.h4 variants={fade}>
            <span>Important:</span> to all parents and students
          </motion.h4>
        </motion.div>
        <motion.div
          className="noticeDiv"
          variants={containerPoliciesArticle}
          initial="initial"
          animate={control2}
        >
          <motion.p
            className="noticeParagraph"
            variants={window.innerWidth > 480 ? fade : fadeUp}
          >
            As some of you may have heard, our son, Carter, has been diagnosed
            with SMA (Spinal Muscular Atrophy) a genetic disorder, which will
            confine him to a wheelchair for the rest of his life. It affects the
            muscles and nerves of the body and will eventually leave him without
            the ability to use his hands, arms, legs, and feet. While these are
            of themselves very serious they are not that which causes the most
            harm. The most crucial thing is to keep him healthy and this
            consists of keeping him away from colds, viruses such as the flu,
            bronchitis, and pneumonia, whooping cough, etc, which is what
            eventually kills all who are affected with this illness. Any major
            cold he gets may require him to stay a several days in the hospital.
            Therefore, I am asking that if you, as a student, have the flu,
            cold, RSV, or any respiratory problems that you reschedule your
            lesson with me for another time. I need to do this to keep him safe
            and healthy. I would greatly appreciate your help with this
            endeavor.
            <span>Sincerely, Mark</span>
          </motion.p>
        </motion.div>
        {inView && <div className="stripe" />}
      </article>
      <SecContact shortPage={true} />
    </StyledPoliciesPage>
  );
};

const StyledPoliciesPage = styled("div")`
  .policiesContent {
    /* border: 1px dashed grey; */
    position: relative;
    width: 72vw;
    margin: 0 auto;
    padding-top: 12vh;
    .articleHeader,
    .noticeHeader {
      margin-bottom: 6vh;
      h2 {
        font-size: calc(1.4rem + 1.2vw);
        font-weight: 300;
        margin-bottom: 1rem;
        padding-right: 1rem;
      }
      h4 {
        font-size: calc(0.8rem + 1vw);
        font-weight: 300;
        font-style: italic;
      }
    }
    .articleContent {
      margin-bottom: 12vh;
      .paragraph {
        margin-bottom: 4vh;
        font-size: calc(0.6rem + 0.7vw);
        font-weight: 300;
        line-height: 2rem;
        .number {
          display: inline-block;
          margin-right: 0.6rem;
          font-size: calc(1rem + 1vw);
          font-weight: 600;
        }
        .innerList {
          display: block;
          margin-left: 3%;
          font-weight: 300;
          &::first-letter {
            font-weight: 600;
          }
        }
      }
    }
    .refMarker {
      padding: 0.2rem;
      /* border: 2px solid red; */
    }
    .noticeHeader {
      h4 {
        span {
          text-transform: uppercase;
          font-size: calc(0.7rem + 0.7vw);
          font-weight: 700;
        }
      }
    }
    .noticeDiv {
      .noticeParagraph {
        margin-bottom: 4vh;
        font-size: calc(0.6rem + 0.7vw);
        font-weight: 300;
        line-height: 2.4rem;
        span {
          display: block;
          margin-top: 4vh;
          font-style: italic;
        }
      }
    }
    .stripe {
      position: absolute;
      top: 0;
      right: 20%;
      width: 5%;
      min-width: 2rem;
      height: 0%;
      background: var(--tan);
      opacity: 0.4;
      z-index: -1;
      animation: lineGrow 3.2s 0.2s ease forwards;
    }
  }

  @keyframes lineGrow {
    to {
      height: 102%;
    }
  }

  @media screen and (max-width: 768px) {
    overflow-x: hidden;
    .policiesContent {
      width: 84vw;
      .articleContent {
        .paragraph {
          line-height: 1.6rem;
          .innerList {
            margin-left: 6%;
          }
        }
      }
      .noticeDiv {
        .noticeParagraph {
          margin-bottom: 4vh;
          line-height: 1.8rem;
        }
      }
    }
  }
  @media screen and (max-width: 480px) {
    .policiesContent {
      .articleContent {
        .paragraph {
          font-weight: 400;
          margin-bottom: 2.8vh;
          line-height: 1.2rem;
        }
      }
      .noticeDiv {
        .noticeParagraph {
          font-weight: 400;
          margin-bottom: 2.8vh;
          line-height: 1rem;
        }
      }
    }
  }
`;

export default PoliciesPage;
