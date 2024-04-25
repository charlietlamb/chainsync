import { Dispatch, SetStateAction, createContext, useContext } from "react";

interface AddressContext {
  address: string;
  transactions: Transaction[];
  setTransactions: Dispatch<SetStateAction<Transaction[]>>;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
  transactionsMaster: Transaction[];
}

export const AddressContext = createContext<AddressContext | undefined>(
  undefined,
);

export function useAddressContext() {
  const context = useContext(AddressContext);
  if (!context) {
    throw new Error("useAddressContext must be used within a AddressProvider");
  }
  return context;
}
