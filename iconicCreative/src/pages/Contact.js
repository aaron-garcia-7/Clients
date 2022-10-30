import React from "react";
import ScrollToTop from "../router/ScrollToTop";
import { motion } from "framer-motion";
import { pageAnim } from "../animations/pageAnim";
import styled from "styled-components";
import Nav from "../components/Nav";
import PageBanner from "../components/PageBanner";
import Footer from "../components/Footer";

function Contact({ navOpen, setNavOpen, pageWidth }) {
  return (
    <ScContact
      variants={pageAnim}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <ScrollToTop />
      <Nav navOpen={navOpen} setNavOpen={setNavOpen} pageWidth={pageWidth} />
      <PageBanner title={"Contact"} />
      <main>
        <h1>Contact Us</h1>
        <p className="formDescription">
          Got a project in mind? Fill out the form below and a member from our
          team will be in contact with you as soon as possible.
        </p>
        <form action="">
          <div className="top">
            <input type="text" placeholder="Name" required />
            <input type="text" placeholder="Email" required />
            <input type="text" placeholder="Phone" />
            <select>
              <option value="brand-design">Brand Design</option>
              <option value="brand-design">Web Design</option>
              <option value="brand-design">Product Design</option>
              <option value="brand-design">App Design</option>
              <option value="brand-design">Social Media Management</option>
              <option value="brand-design">Email Marketing</option>
              <option value="brand-design">Other</option>
            </select>
          </div>
          <textarea
            name=""
            id=""
            cols="30"
            rows="4"
            placeholder="Message"
            className="comment"
          ></textarea>
          <button className="submitBtn">Send</button>
        </form>
      </main>
      <Footer />
    </ScContact>
  );
}

const ScContact = styled(motion.div)`
  main {
    height: 120vh;
    min-height: 48rem;
    background: var(--light);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: calc(1.6rem + 1.6vw);
      margin: 6rem 0 2rem 0;
    }
    .formDescription {
      width: 50vw;
      margin-bottom: 4rem;
      font-size: calc(0.6rem + 0.8vw);
      text-align: center;
      line-height: 140%;
    }
    form {
      width: 50vw;
      display: flex;
      flex-direction: column;
      .top {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        > * {
          width: 46%;
          margin-bottom: 2rem;
        }
        input,
        select {
          border-radius: 0;
          border: 1px solid var(--offDark);
          padding: 1rem;
          font-size: calc(0.6rem + 0.6vw);
          color: #777;
        }
        select {
          cursor: pointer;
        }
      }
      .comment {
        border: 1px solid var(--offDark);
        border-radius: 0;
        width: 100%;
        height: 50%;
        padding: 1rem;
        resize: vertical;
        font-size: calc(0.6rem + 0.6vw);
      }
      .submitBtn {
        background: var(--dark);
        color: var(--light);
        width: 12rem;
        height: 6rem;
        font-size: calc(0.8rem + 0.8vw);
        border-radius: 4rem;
        margin: 2rem auto;
        cursor: pointer;
      }
    }
  }

  @media (max-width: 1224px) {
    main {
      .formDescription {
        width: 64vw;
      }
      form {
        width: 64vw;
      }
    }
  }

  @media (max-width: 768px) {
    main {
      .formDescription {
        width: 60vw;
      }
      form {
        width: 60vw;
        display: flex;
        flex-direction: column;
        .top {
          flex-direction: column;
          > * {
            width: 100%;
            margin-bottom: 1rem;
          }
          input,
          select {
            padding: 1rem;
          }
        }
      }
    }
  }
  @media (max-width: 520px) {
    main {
      .formDescription {
        width: 80vw;
      }
      form {
        width: 80vw;
        .top {
          input,
          select {
            height: 3.2rem;
            padding: 1rem 0.4rem;
            background: white;
            color: #999;
            font-size: calc(0.7rem + 0.7vw);
          }
        }
        .comment {
          padding: 1rem 0.4rem;
          font-size: calc(0.7rem + 0.7vw);
        }
      }
    }
  }
`;

export default Contact;
