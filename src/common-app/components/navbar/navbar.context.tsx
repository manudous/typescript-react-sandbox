import React from "react";
import { NavbarContextModel, createEmptyNavbarContextModel } from "./navbar.vm";

interface Context extends NavbarContextModel {
  updateSelectedOption: (selectedOption: string) => void;
}

const noSelectedOption = "no selected option";

const NavbarContext = React.createContext<Context>({
  currentSelectedOption: noSelectedOption,
  updateSelectedOption: () =>
    "** If you area reading this, likely you have forgotten to add the provider on top of your app",
});

interface Props {
  children: React.ReactNode;
}

export const NavbarProvider: React.FunctionComponent<Props> = (props) => {
  const { children } = props;
  const [selectedOption, setSelectedOption] =
    React.useState<NavbarContextModel>(createEmptyNavbarContextModel());

  const updateSelectedOption = (selectedOption: string) => {
    setSelectedOption({ currentSelectedOption: selectedOption });
  };

  return (
    <NavbarContext.Provider
      value={{
        currentSelectedOption: selectedOption.currentSelectedOption,
        updateSelectedOption,
      }}
    >
      {children}
    </NavbarContext.Provider>
  );
};

export const useNavbarContext = () => React.useContext(NavbarContext);
