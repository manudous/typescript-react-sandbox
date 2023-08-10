export interface NavbarContextModel {
  currentSelectedOption: string;
}

export const createEmptyNavbarContextModel = (): NavbarContextModel => ({
  currentSelectedOption: "accounts",
});
