"use client";

import Image from "next/image";
import { AddressContext } from "./context/addressContext";
import Transactions from "./transactions/Transactions";
import { useState } from "react";
import { useTransactions } from "./transactions/hooks/useTransactions";
import UserAvatar from "../user/UserAvatar";
import AddressHeader from "./AddressHeader";
import AddressContent from "./AddressContent";

export default function Address({
  address,
  transactionsInit,
}: {
  address: string;
  transactionsInit: Transaction[];
}) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [page, setPage] = useState(1);
  useTransactions(transactionsInit, setTransactions, page);
  return (
    <AddressContext.Provider
      value={{
        address,
        transactions,
        setTransactions,
        page,
        setPage,
        transactionsMaster: transactionsInit,
      }}
    >
      <div className="relative min-h-screen pt-[57px]">
        <AddressHeader />
        <div className="flex w-full gap-4 p-4">
          <AddressContent />
          <Transactions />
        </div>
      </div>
    </AddressContext.Provider>
  );
}
