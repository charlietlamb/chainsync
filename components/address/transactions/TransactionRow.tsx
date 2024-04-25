import { TableCell, TableRow } from "@/components/ui/table";
import TransactionValue from "./TransactionValue";
import { cn } from "@/lib/utils";

export default function TransactionRow({
  transaction,
  index,
}: {
  transaction: Transaction;
  index: number;
}) {
  const tableCellClassName = cn(
    "max-w-24 font-medium p-2",
    index % 2 === 0 ? "bg-emerald-600" : "bg-emerald-700",
  );
  return (
    <TableRow className="w-auto divide-x divide-zinc-200">
      <TableCell className={tableCellClassName}>
        <TransactionValue value={transaction.hash} index={index} />
      </TableCell>
      <TableCell className={tableCellClassName}>
        {" "}
        <TransactionValue value={transaction.from} index={index} />
      </TableCell>
      <TableCell className={tableCellClassName}>
        {" "}
        <TransactionValue value={transaction.to} index={index} />
      </TableCell>
      <TableCell className={tableCellClassName}>
        {" "}
        <TransactionValue value={transaction.value} index={index} />
      </TableCell>
    </TableRow>
  );
}
