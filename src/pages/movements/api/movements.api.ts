import Axios from "axios";
import { Account, Movement } from "./movements.api-model";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getMovements = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );


  export const getAccount = (id: string): Promise<Account> =>
    Axios.get(`${urlAccount}/${id}`).then(({ data }) => data);
