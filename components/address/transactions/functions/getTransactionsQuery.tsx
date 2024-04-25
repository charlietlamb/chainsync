export async function getTransactionsQuery({
  pageParam,
  transactionsMaster,
}: {
  pageParam: number | undefined;
  transactionsMaster: Transaction[];
}) {
  if (pageParam === undefined) throw new Error("No page param");
  const startIndex = (pageParam - 1) * 16;
  const endIndex = startIndex + 16;
  return transactionsMaster.slice(startIndex, endIndex);
}
