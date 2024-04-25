import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useAddressContext } from "../context/addressContext";
import TransactionRow from "./TransactionRow";
import { Button } from "@/components/ui/button";
import { errorToast } from "@/components/toast/errorToast";
import { Ban } from "lucide-react";

export default function Transactions() {
  const { transactions, page, setPage, transactionsMaster } =
    useAddressContext();
  const tableHeadClassName = "w-24 text-zinc-100 font-bold p-2 h-auto";
  return (
    <div className="flex flex-col gap-4">
      <Table className="max-w-96 overflow-hidden rounded-lg border border-zinc-200">
        <TableHeader className="rounded-tl rounded-tr">
          <TableRow className="w-auto divide-x divide-zinc-200 bg-emerald-800 hover:bg-emerald-800">
            <TableHead className={tableHeadClassName}>Hash</TableHead>
            <TableHead className={tableHeadClassName}>From</TableHead>
            <TableHead className={tableHeadClassName}>To</TableHead>
            <TableHead className={tableHeadClassName}>Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction: Transaction, index: number) => (
            <TransactionRow
              transaction={transaction}
              index={index}
              key={transaction.hash}
            />
          ))}
        </TableBody>
      </Table>
      <div className="flex gap-4">
        <Button
          variant="emerald_dark"
          onClick={() => {
            if (page > 1) {
              setPage(page - 1);
            } else {
              errorToast(
                "You are on the first page",
                "You cannot go back",
                <Ban />,
              );
            }
          }}
        >
          Previous Page
        </Button>
        <Button
          variant="emerald_dark"
          onClick={() => {
            console.log(transactionsMaster.length / 16, page);
            if (page <= transactionsMaster.length / 16) {
              setPage(page + 1);
            } else {
              errorToast(
                "You are on the last page",
                "You cannot go forward",
                <Ban />,
              );
            }
          }}
        >
          Next Page
        </Button>
      </div>
    </div>
  );
}
