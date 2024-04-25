import { emeraldToast } from "@/components/toast/emeraldToast";
import { fetchPreviousTransactions } from "./searchPreviousTransactions";
import { errorToast } from "@/components/toast/errorToast";
import { Ban, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

export async function searchAccount(address: string) {
  const transactions = await fetchPreviousTransactions({ ethAddress: address });
  if (!transactions) {
    if (transactions === 0) {
      return errorToast(
        "Please enter a valid eth address",
        `${address} not found`,
        <Ban />,
      );
    } else if (transactions === -1) {
      return errorToast("Error", "Invalid address", <Ban />);
    }
  }
  emeraldToast("Account found", `${address} found`, <CheckCircle />);
  return transactions;
}
