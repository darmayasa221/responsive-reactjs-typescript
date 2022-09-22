import { css, Global } from "@emotion/react";
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { mq } from "./globalStyle";
function App() {
  return (
    <>
      <Navbar />
      <Global
        styles={css({
          "*": {
            boxSizing: "border-box",
            margin: 0,
            padding: 0,
            fontFamily: "Source Sans Pro, s",
          },
          ".container": {
            zIndex: 1,
            width: "100%",
            maxWidth: "1300px",
            marginRight: "auto",
            marginLeft: "auto",
            paddingRight: "auto",
            paddingLeft: "auto",
          },
          ".btn": {
            backgroundColor: "#4B59F7",
            borderRadius: "4px",
            whiteSpace: "nowrap",
            padding: "12px 64px",
            color: "white",
            outline: "none",
            border: "none",
            cursor: "pointer",
            fontSize: "20px",
            ":hover": {
              transition: "all 0.3s ease-out",
              backgroundColor: "#0467FB",
            },
            [mq[3] as string]: {
              width: "100%",
              padding: "10px 20px",
              fontSize: "16px",
            },
          },
          [mq[2] as string]: {
            ".container": {
              paddingRight: "30px",
              paddingLeft: "30px",
            },
          },
        })}
      />
    </>
  );
}

export default App;
