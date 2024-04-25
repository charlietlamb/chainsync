import { useInfiniteQuery } from "@tanstack/react-query";
import { Dispatch, SetStateAction, useEffect } from "react";
import { getTransactionsQuery } from "../functions/getTransactionsQuery";

export async function useTransactions(
  transactionsMaster: Transaction[],
  setTransactions: Dispatch<SetStateAction<Transaction[]>>,
  page: number,
) {
  const {
    data: transactionPages,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    refetch,
  } = useInfiniteQuery({
    queryKey: ["transactions"],
    queryFn: ({ pageParam = 1 }) =>
      getTransactionsQuery({
        pageParam,
        transactionsMaster,
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage || lastPage.length === 0) return undefined;
      return allPages.length + 1;
    },
  });
  useEffect(() => {
    if (status === "success") {
      console.log(page);
      console.log(transactionPages);
      setTransactions(
        transactionPages.pages[transactionPages.pages.length - 1],
      );
    }
  }, [transactionPages]);
  useEffect(() => {
    if (transactionPages && page > transactionPages?.pages.length) {
      if (hasNextPage && !isFetchingNextPage) {
        fetchNextPage();
      } else {
        setTransactions([]);
      }
    } else {
      setTransactions(transactionPages ? transactionPages.pages[page - 1] : []);
    }
  }, [page]);
}
