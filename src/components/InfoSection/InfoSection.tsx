import styled from "@emotion/styled";
import * as React from "react";
import { Link } from "react-router-dom";
import { mq } from "../../globalStyle";
import { homeObjOne } from "../../pages/HomePage/data";
const InfoSec = styled.div({
  color: "white",
  padding: "160px 0",
  background: "#101522",
});
const InfoRow = styled.div({
  display: "flex",
  margin: "0 -15px  -15px -15px",
  flexWrap: "wrap",
  alignItems: "center",
});
const InfoColumn = styled.div({
  marginBottom: "15px",
  paddingRight: "15px",
  paddingLeft: "15px",
  flex: 1,
  maxWidth: "50%",
  flexBasis: "50%",
  [mq[1] as string]: {
    maxWidth: "100%",
    flexBasis: "100%",
    display: "flex",
    justifyContent: "center",
  },
});
const TextWraper = styled.div({
  maxWidth: "540px",
  paddingTop: "0",
  paddingBottom: "60px",
  [mq[1] as string]: {
    paddingBottom: "65px",
  },
});
const TopLine = styled.div({
  color: "#a9b3c1",
  fontSize: "18px",
  lineHeight: "16px",
  letterSpacing: "1.4px",
  marginBottom: "16px",
});
const Heading = styled.h1({
  marginBottom: "24px",
  fontSize: "48px",
  lineHeight: "1.1",
  color: "#f7f8fa",
});
const Subtitle = styled.p({
  maxWidth: "440px",
  marginBottom: '35px',
  fontSize: '18px',
  lineHeight: '24px',
  color: '#a9b3c1'
});
const ButtonLink = styled(Link)({
  textDecoration: "none",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 16px",
  width: "100%",
});
const ImageWraper = styled.div({
  maxWidth: '555px',
  display :'flex',
  justifyContent: 'flex-end',
})
const Img = styled.img({
  paddingRight : 0,
  border: 0,
  maxWidth: '100%',
  verticalAlign: 'middle',
  display: 'inline-block',
  maxHeight: '500px'
})
const InfoSection = () => {
  return (
    <>
      <InfoSec>
        <div className="container">
          <InfoRow>
            <InfoColumn>
              <TextWraper>
                <TopLine>{homeObjOne.topLine}</TopLine>
                <Heading>{homeObjOne.headline}</Heading>
                <Subtitle>
                 {homeObjOne.description}
                </Subtitle>
                <ButtonLink to="/">
                  <button className='btn'>
                    {homeObjOne.buttonLabel}
                  </button>
                </ButtonLink>
              </TextWraper>
            </InfoColumn>
            <InfoColumn>
              <ImageWraper> 
                  <Img src={homeObjOne.imgStart || homeObjOne.img}  />
              </ImageWraper>
            </InfoColumn>
          </InfoRow>
        </div>
      </InfoSec>
    </>
  );
};

export default InfoSection;
