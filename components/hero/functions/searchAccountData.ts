import { fetchPreviousTransactions } from "./searchPreviousTransactions";
import { emeraldToast } from "@/components/toast/emeraldToast";
import { Ban } from "lucide-react";

export async function searchAccountData(address: string) {
  const transactions = await fetchPreviousTransactions({ ethAddress: address });
  if (!transactions) {
    if (transactions === 0) {
      return null;
    } else if (transactions === -1) {
      return null;
    }
  }

  return transactions;
}
