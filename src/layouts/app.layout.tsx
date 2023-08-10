import React from "react";
import { Footer, Header, Navbar } from "../common-app/components";
import classes from "./app.module.css";

interface Props {
  children: React.ReactNode;
}

export const AppLayout: React.FunctionComponent<Props> = (props) => {
  const { children } = props;

  return (
    <>
      <Header />
      <Navbar />
      <div className={classes.mainContent}>{children}</div>
      <Footer />
    </>
  );
};
