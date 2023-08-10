interface AppRoutes {
  root: string;
  login: string;
  accountList: string;
  createAccount: string;
  editAccount: string;
  movements: string;
  transfer: string;
}

export const appRoutes: AppRoutes = {
  root: "/",
  login: "/login",
  accountList: "/account-list",
  createAccount: "/create-account",
  editAccount: "/edit-account/:id",
  movements: "/movements/:id",
  transfer: "/transfer/:id",
};
