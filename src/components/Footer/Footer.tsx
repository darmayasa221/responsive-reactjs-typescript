import styled from "@emotion/styled";
import React from "react";
import { Link } from "react-router-dom";
import { mq } from "../../globalStyle";

const FooterContainer = styled.div({
  backgroundColor: "white",
  padding: "4rem 0 2rem 0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
});
const FooterSubscription = styled.section({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  marginBottom: "24px",
  padding: "24px",
});
const FooterSubHeading = styled.p({
  fontFamily:
    "Trebuchet MS, Lucida Sans Unicode, Lucida Grande, Lucida Sans, Arial, sans-serif",
  marginBottom: "24px",
  fontSize: "24px",
});
const FooterSubTex = styled.p({
  marginBottom: "24px",
  fontSize: "24px",
});
const Form = styled.form({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [mq[4] as string]: {
    flexDirection: "column",
    width: "80%",
  },
});
const FormInput = styled.input({
  padding: "10px 20px",
  borderRadius: "2px",
  marginRight: "10px",
  outline: "none",
  fontSize: "16px",
  border: "1px solid black",
  "::placeholder": {
    color: "#242424",
  },
  [mq[4] as string]: {
    margin: "0 0 16px 0",
    width: "100%",
  },
});
const FooterLinkContainer = styled.div({
  width: "100%",
  maxWidth: "1000px",
  display: "flex",
  justifyContent: "center",
  [mq[4] as string]: {
    paddingTop: "32px",
  },
});
const FooterLinkWrapper = styled.div({
  display: "flex",
  [mq[4] as string]: {
    flexDirection: "column",
  },
});
const FooterLinksItems = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  margin: "16px",
  textAlign: "left",
  width: "160px",
  boxSizing: "border-box",
  [mq[6] as string]: {
    margin: "0",
    padding: "10px",
    width: "100%",
  },
});
const FooterLinkTitle = styled.h2({
  marginBottom: "16px",
});
const FooterLink = styled(Link)({
  color: "black",
  textDecoration: "none",
  marginBottom: "0.5rem",
  ":hover" : {
    color: '#4B59F7',
    transition: 'all 0.2s ease'
  },
});
const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>
          Join our exclusive membership to recive the latest news nad trends
        </FooterSubHeading>
        <FooterSubTex>You can unsubscribe at any time.</FooterSubTex>
        <Form>
          <FormInput name="email" type="email" placeholder="Your Email" />
          <button className="btn">subscribe</button>
        </Form>
      </FooterSubscription>
      <FooterLinkContainer>
        <FooterLinkWrapper>
          <FooterLinksItems>
            <FooterLinkTitle>about us</FooterLinkTitle>
            <FooterLink to="/"> Testimonial</FooterLink>
            <FooterLink to="/"> Careers</FooterLink>
            <FooterLink to="/"> Investor</FooterLink>
            <FooterLink to="/"> Terms of Services</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>contact us</FooterLinkTitle>
            <FooterLink to="/"> Testimonial</FooterLink>
            <FooterLink to="/"> Careers</FooterLink>
            <FooterLink to="/"> Investor</FooterLink>
            <FooterLink to="/"> Terms of Services</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>videos</FooterLinkTitle>
            <FooterLink to="/"> Testimonial</FooterLink>
            <FooterLink to="/"> Careers</FooterLink>
            <FooterLink to="/"> Investor</FooterLink>
            <FooterLink to="/"> Terms of Services</FooterLink>
          </FooterLinksItems>
          <FooterLinksItems>
            <FooterLinkTitle>social media</FooterLinkTitle>
            <FooterLink to="/"> Testimonial</FooterLink>
            <FooterLink to="/"> Careers</FooterLink>
            <FooterLink to="/"> Investor</FooterLink>
            <FooterLink to="/"> Terms of Services</FooterLink>
          </FooterLinksItems>
        </FooterLinkWrapper>
      </FooterLinkContainer>
    </FooterContainer>
  );
};
export default Footer;
