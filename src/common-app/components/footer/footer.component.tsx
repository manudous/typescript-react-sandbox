import React from "react";
import logoFooter from "../../../../public/assets/logo_footer.svg";
import classes from "./footer.module.css";

export const Footer: React.FunctionComponent = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <img className={classes.footerLogo} src={logoFooter} />
      </div>
    </footer>
  );
};
