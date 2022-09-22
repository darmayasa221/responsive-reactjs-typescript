import styled from "@emotion/styled";
import * as React from "react";
import { Link } from "react-router-dom";
import { SiTypescript } from "react-icons/si";
import { FaTimes, FaBars } from "react-icons/fa";
import { mq } from "../../globalStyle";

const Nav = styled.nav({
  background: "#101522",
  height: "80px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "1.2rem",
  position: "sticky",
  top: "0",
  zIndex: "999",
});
const NavbarContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  height: "80px",
});
const NavLogo = styled(Link)({
  color: "white",
  justifySelf: "flex-start",
  textDecoration: "none",
  cursor: "pointer",
  fontSize: "2rem",
  display: "flex",
  alignItems: "center",
});
const NavIcon = styled(SiTypescript)({
  marginRight: "0.5rem",
});
const MobileIcon = styled.div({
  display: "none",
  color: "white",
  [mq[3] as string]: {
    display: "block",
    position: "absolute",
    top: 0,
    right: 0,
    transform: "translate(-100%, 60%)",
    fontSize: "1.8rem",
    cursor: "pointer",
  },
});
const NavMenu = styled.ul<{ active: boolean }>(({ active }) => ({
  display: "flex",
  alignItems: "center",
  listStyle: "none",
  textAlign: "center",
  [mq[3] as string]: {
    flexDirection: "column",
    width: "100%",
    height: "90vh",
    top: "80px",
    position: "absolute",
    left: active ? 0 : "-100%",
    opacity: 1,
    transition: "all 0.5s ease",
    backgroundColor: "#101522",
  },
}));
const NavItem = styled.li<{ active: boolean }>(({ active }) => ({
  height: "80px",
  borderBottom: "2px solid transparent",
  cursor: "pointer",
  ":hover": {
    borderBottom: "2px solid #4b59f7",
  },
  [mq[3] as string]: {
    width: "100%",
    ":hover": {
      border: "none",
    },
  },
}));
const NavButtonLink = styled(Link)({
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  height: "100%",
  width: "100%",
});
const NavItemButton = styled.li({
  [mq[3] as string]: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "120px",
  },
});
const NavLinks = styled(Link)({
  color: "white",
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  padding: "0.5rem 1rem",
  height: "100%",
  [mq[3] as string]: {
    textAlign: "center",
    padding: "2rem",
    width: "100%",
    display: "table",
    ":hover": {
      color: "#4b59f7",
      transition: "all 0.3s ease",
    },
  },
});
const Navbar = () => {
  const [click, setClick] = React.useState<boolean>(false);
  console.log(click);
  return (
    <>
      <Nav>
        <NavbarContainer className="container">
          <NavLogo to="/">
            <NavIcon />
            ICON
          </NavLogo>
          <MobileIcon
            onClick={() => {
              click ? setClick(false) : setClick(true);
            }}
          >
            {click ? <FaTimes /> : <FaBars />}
          </MobileIcon>
          <NavMenu active={click}>
            <NavItem active={click}>
              <NavLinks to={"/"}>Home</NavLinks>
            </NavItem>
            <NavItem active={click}>
              <NavLinks to={"/"}>Services</NavLinks>
            </NavItem>
            <NavItem active={click}>
              <NavLinks to={"/"}>Products</NavLinks>
            </NavItem>
            <NavItemButton>
              <NavButtonLink to={"/"}>
                <button className="btn" type={"button"}>
                  Sign Up
                </button>
              </NavButtonLink>
            </NavItemButton>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
